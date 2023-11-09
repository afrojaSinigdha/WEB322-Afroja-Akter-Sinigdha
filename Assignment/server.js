
const express = require('express');
const app = express();
const session = require('express-session');
const fs = require('fs');
const usersData = JSON.parse(fs.readFileSync('./data/fakeUsers.json', 'utf8'));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));
function template(title, html,menu) {
    return `<html>
        <head>
            <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
            crossorigin="anonymous"/>
            <link rel="stylesheet" type="text/css" href="/styles.css">
        </head>
        <body class="container">
            <div>${menu}</div>
            <h1>${title}</h1>
            <div>
                ${html}
            </div> 
        </body>
    </html>`;
}
app.use(express.urlencoded({ extended: true }));
// Configure middleware

app.use(express.static('public'));

app.get('/', (req, res) => {
    const html = `
        
            <form action="/login" method="post">
                <input type="text" name="username" placeholder="Username" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit">Login</button>
            </form>
        
    `;
    const menu = `
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/list">List</a></li>
            </ul>
        </nav>
    `;
    res.send(template('Login', html,menu));
});

app.post('/login', (req, res) => {
    // Implement hard-coded authentication logic
    const { username, password } = req.body;

    
    if (Array.isArray(usersData)) {
        const user = usersData.find(u => u.email === username && u.password === password);
        if (user) {
            req.session.authenticated = true;
            res.redirect('/list');
        } else {
            res.send('Authentication failed');
        }
    }
});


app.get("/list", (req, res) => {
    if (Array.isArray(usersData)) {
        const first25Users = usersData.slice(0, 25);
        const tableRows = first25Users.map((user) => {
            const fullName = `${user.firstName} ${user.lastName}`;
            return `<tr>
                        <td>${user.id}</td>
                        <td><a href="/detail/${user.id}">${fullName}</a></td>
                    </tr>`;
        });

        const tableHTML = `
            
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows.join("")}
                    </tbody>
                </table>
                
        `;
        const menu = `
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/list">List</a></li>
            </ul>
        </nav>
        `;

        res.send(template('List',tableHTML,menu));
    } else {
        res.send('Invalid data format for the list page.');
    }
});


app.get('/detail/:id', (req, res) => {
    
        const userId = req.params.id;
        
        if (Array.isArray(usersData)) {
            const user = usersData.find(u => u.id == userId);

            if (user) {
                const { firstName, lastName, email, dob, company, phone } = user;

                // Create HTML to display user details
                const html = `
                    
                        <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Date of Birth:</strong> ${dob}</p>
                        <p><strong>Company:</strong> ${company}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <a href="/list">Back to List</a></div>
                    
                `;
                const menu = `
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/list">List</a></li>
                    </ul>
                </nav>
                `;

                res.send(template('Details',html,menu));
            } else {
                res.send('User not found.');
            }
        } else {
            res.send('Invalid data format for user details.');
        }
    
});
app.get('/styles.css', (req, res) => {
    // Set the Content-Type header to 'text/css'
    res.setHeader('Content-Type', 'text/css');

    // Send the CSS file
    res.sendFile(__dirname + '/styles.css');
});


// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});