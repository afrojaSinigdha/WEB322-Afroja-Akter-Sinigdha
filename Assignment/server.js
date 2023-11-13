
const express = require('express');
const app = express();
const pageRoutes = require("./routes/page.routes")
const apiRoutes = require("./routes/api.routes")

const session = require('express-session');

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(express.urlencoded({ extended: true }));
// Configure middleware

app.use(express.static('public'));

// ROUTE HANDLING
app.use(pageRoutes);
app.use("/api",apiRoutes);


// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
