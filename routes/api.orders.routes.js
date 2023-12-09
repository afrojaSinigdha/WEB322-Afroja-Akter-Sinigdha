const express = require("express");

apiOrderRoutes = express.Router();

// GET all orders
apiOrderRoutes.get('/', async (req, res) => {
  const orders = await OrdersService.findAll();
  res.json(orders);
});

// GET a single order
apiOrderRoutes.get('/:id', async (req, res) => {
  const order = await OrdersService.findById(req.params.id);
  res.json(order);
});

// DELETE an order
apiOrderRoutes.delete('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    const isDeleted = await OrdersService.delete(id);
    if (isDeleted) {
      return res.json({ message: `Order ${id} was deleted successfully` });
    } else {
      return res.json({ message: `Order ${id} not found` });
    }
  } catch (error) {
    return res.json({ message: error.message });
  }
});

// POST a new order
apiOrderRoutes.post('/', async (req, res) => {
  const newOrder = await OrdersService.create(req.body);
  res.json(newOrder);
});

 module.exports = apiOrderRoutes;