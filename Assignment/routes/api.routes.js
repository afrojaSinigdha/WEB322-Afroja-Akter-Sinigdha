const express = require('express');
const apiRoutes = express.Router();
const fs = require('fs');
const ProductsService = JSON.parse(fs.readFileSync('./data/fakeProducts.json', 'utf8'));
const UsersService = require("../services/users.service");

// FAKE_USERS
apiRoutes.get("/users", (req, res) => {
    res.json(UsersService.findAll());
  });
  

  apiRoutes.get("/users/:id", (req, res) => { 
  
    const id = req.params.id;
    //  const user = users.find((user) => user.id == id);
    const user = UsersService.findById(id);
  
    res.json(user);
  });

  // DELETE 
apiRoutes.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    UsersService.delete(id);
    res.json({ success: true, message: `User with ID ${id} deleted.` });
});


// POST a new user
apiRoutes.post("/users", (req, res) => {
    const newUser = UsersService.add(req.body);
    res.json(newUser);
});
  


  // FAKE_PRODUCTS
 
apiRoutes.get("/products", (req, res) => {
    res.json(ProductsService.findAll());
});


apiRoutes.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const product = ProductsService.findById(id);
    res.json(product);
});

// delete product
apiRoutes.delete("/products/:id", (req, res) => {
    const id = req.params.id;
    ProductsService.delete(id);
    res.json({ success: true, message: `Product with ID ${id} deleted.` });
});

// add new product
apiRoutes.post("/products", (req, res) => {
    const newProduct = ProductsService.add(req.body);
    res.json(newProduct);
});
module.exports=apiRoutes;