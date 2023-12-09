

const {models} = require("../db");

class OrdersService {
  static async findAll() {
    return await models.Order.findAll();
  }

  static async findById(id) {
   
    return await models.Order.findByPk(id);
  }
  

  static async create(order){
    return await models.Order.create(order);
  }

  static async delete(id) {
    try {
      const order = await models.Order.findByPk(id);
      if (!order) {
        throw new Error(`Order with id ${id} not found`);
      }
      await order.destroy();
      return true;
      
    } catch (error) {
      // You could also throw the error to be handled by the API layer
      console.error('Error in deleting order:', error.message);
      throw error;
    }
  }

}

module.exports = OrdersService;
