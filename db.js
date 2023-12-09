const Sequelize = require('sequelize');
require('dotenv').config();

let PGHST= process.env.PGHOST;
let PGDATABASE = process.env.PGDATABASE;
let PGUSER=process.env.PGUSER;
let PGPASSWORD=process.env.PGPASSWORD;


// set up sequelize to point to our postgres database
const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHST,
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
    ssl: { rejectUnauthorized: false },
  },
});


const User = sequelize.define('users', {
    _id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
  firstname: {
    type: Sequelize.STRING,
    validate: {
        notEmpty: true,
    },
  },

  lastname: Sequelize.TEXT,
  email: Sequelize.TEXT,
  age: Sequelize.INTEGER

},
  
    {
        createdAt: false, // disable createdAt
        updatedAt: false, // disable updatedAt
      }
  
);

const Product = sequelize.define('products', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
},
  name: {
    type: Sequelize.STRING,
    validate: {
        notEmpty: true,
    },
  },
  isbn: Sequelize.TEXT,
  price: Sequelize.DOUBLE,
  description: Sequelize.TEXT,
company: Sequelize.TEXT,
},
  
    {
        createdAt: false, // disable createdAt
        updatedAt: false, // disable updatedAt
      }
  
);

const Order = sequelize.define('orders', {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quantity:  Sequelize.INTEGER,
   
  status: {
    type: Sequelize.STRING,
    defaultValue: 'Pending', 
    validate: {
      notEmpty: true
    }
  }
},
{
  createdAt: false,
  updatedAt: false,
});



sequelize.sync().then(() => {
  // create a new "Project" and add it to the database

});

async function connect(){
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");

    }catch(err){
        console.log("Unable to connect to database",err);
    }
}



async function sync(){
    await sequelize.sync({alter: true});
    
}

module.exports = {
    connect,
    sync,
    models: {
        User,
        Product,
        Order
    }
};



