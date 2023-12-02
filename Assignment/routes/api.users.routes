const express = require("express");

apiUserRoutes = express.Router();

// User Routes
apiUserRoutes.get("/", async (req, res) => {
  const users = await UsersService.find()
  res.json(users);
});

apiUserRoutes.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await UsersService.findById(id);
  res.json(user);
});

apiUserRoutes.post("/", async  (req,res) =>{
  const user =  await UsersService.create(req.body);
  res.json({user});

});

apiUserRoutes.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const isDeleted = await UsersService.delete(id);
    if (isDeleted) {
      return res.json({ message: `User ${id} was deleted successfully` });
    } else {
      return res.json({ message: `User ${id} not found` });
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
});


module.exports = apiUserRoutes;