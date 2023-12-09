const menu = `<nav><a href="/">Home</a>&nbsp;|&nbsp;<a href="/list">List</a></div>`;

const template = function (title, html) {
  return `<html>
    <head>
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
    crossorigin="anonymous"
  />
    </head>
    <body class="container">
        <div>${menu}</div>
        <h1>${title}</h1>
        <div>
            ${html}
        </div> 
    </body>
    </html>`;
};

const pagination = (currentPage) => {
  return `  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="/list?page=${
        currentPage - 1
      }" aria-label="Previous">
        <span aria-hidden="true">&laquo; Previous</span>
      </a>
    </li>
    <li class="page-item">
      <a class="page-link" href="/list?page=${
        currentPage + 1
      }" aria-label="Next">
        <span aria-hidden="true">Next &raquo;</span>
      </a>
    </li>
  </ul>
</nav>`;
};

const userCard = (user) => {
  return `
  <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${user.firstName} ${user.lastName}</h5>
        <p class="card-text">
        <div>${user.company}</div>
        <a href = "mailto: ${user.email}">Send Email</a>
        </p>
        <a href="/list" class="btn btn-primary">Go Back</a>
    </div>
 </div>`;
};

const loginForm = () => {
  `
<form method="POST">
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
};

module.exports = {
  template,
  loginForm,
  pagination,
  userCard,
};
