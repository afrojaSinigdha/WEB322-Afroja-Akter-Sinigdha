const {models} = require("../db");

class ProductsService {

  static async findAll() {
    return await models.Product.findAll();
  }

  static async findById(id) {
   
    return await models.Product.findByPk(id);
  }
  

  static async create(product){
    return await models.Product.create(product);
  }

  static async delete(id) {
    try {
      const product = await models.Product.findByPk(id);
      if (!product) {
        throw new Error(`Product with id ${id} not found`);
      }
      await product.destroy();
      return true;
      
    } catch (error) {
      // You could also throw the error to be handled by the API layer
      console.error('Error in deleting product:', error.message);
      throw error;
    }
  }

}

module.exports = ProductsService;
