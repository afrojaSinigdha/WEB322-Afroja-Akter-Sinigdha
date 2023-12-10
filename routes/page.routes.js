const express = require("express");
const pageRoutes = express.Router();
const UsersService = require("../services/users.service");
const AuthenticationService = require("../services/authentication.service");
const ProductsService = require("../services/products.service");
pageRoutes.get("/", (req, res) => {
  res.render("login");
});

pageRoutes.post("/", (req, res) => {
  const authentication = AuthenticationService.authenticate(req.body.username, req.body.password);
  if (authentication.isAuthenticated) res.redirect(`/list`);
  else res.redirect("/");
});

pageRoutes.get("/list", async(req, res) => {
  const users = await UsersService.find();

  const itemsToDisplay = 15;
  const page = parseInt(req.query?.page) || 1;
  const start = page == 1 ? 0 : (page - 1) * itemsToDisplay - 1;
  const end = start + itemsToDisplay;
  const filteredUsers = users.filter((user, idx) => idx > start && idx <= end);

  res.render("list", {
    title: "list",
    users: filteredUsers,
    itemsToDisplay,
    page,
    start,
    end,
  });
});

pageRoutes.get("/detail/:id", async (req, res) => {
  try {
  
    const user = await UsersService.findById(req.params.id);


    if (user && user.firstname && user.lastname && user.email) {
      res.render("detail", { user });
    }     
  } catch (error) {
   
    res.send('Internal Server Error');
  }
});


pageRoutes.get("/products", async(req, res) => {
  const products = await ProductsService.findAll();

  const itemsToDisplay = 15;
  const page = parseInt(req.query?.page) || 1;
  const start = page == 1 ? 0 : (page - 1) * itemsToDisplay - 1;
  const end = start + itemsToDisplay;
  const filteredProducts = products.filter((product, idx) => idx > start && idx <= end);

  res.render("products", {
    title: "list - Products",
    products: filteredProducts,
    itemsToDisplay,
    page,
    start,
    end,
  });
});

pageRoutes.get("/productDetail/:id", async (req, res) => {
  try {
  
    const product = await ProductsService.findById(req.params.id);


    if (product && product.name && product.company) {
      res.render("productDetail", { product });
    }     
  } catch (error) {
   
    res.send('Internal Server Error');
  }
});




















module.exports = pageRoutes;
