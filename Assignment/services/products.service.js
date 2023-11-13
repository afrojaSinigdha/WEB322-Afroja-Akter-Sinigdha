const fs = require('fs');
const products = JSON.parse(fs.readFileSync('./data/fakeProducts.json', 'utf8'));

class ProductsService{

    static findAll(){

        return products;
    }

   static findById(id){
       const product = products.find((product) =>{

            return product.id === parseInt(id);
        });

       return product;

    }

}

module.exports = ProductsService;