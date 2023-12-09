const {models} = require("../db");

class UsersService {
  static async find() {
    return await models.User.findAll();
  }

  static async findById(id) {
   
    return await models.User.findByPk(id);
  }
  

  static async create(user){
    return await models.User.create(user);
  }

  static async delete(id) {
    try {
      const user = await models.User.findByPk(id);
      if (!user) {
        throw new Error(`User with id ${id} not found`);
      }
      await user.destroy();
      return true;
      
    } catch (error) {

      console.error('Error in deleting user:', error.message);
      throw error;
    }
  }

}

module.exports = UsersService;
