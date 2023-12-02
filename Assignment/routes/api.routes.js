const express = require("express");
const apiUserRoutes = require("./api.users.routes");
const apiProductsRoutes = require("./api.products.routes");
const apiOrderRoutes = require("./api.orders.routes");

const apiRoutes = express.Router();

apiRoutes.use("/users", apiUserRoutes);
apiRoutes.use("/products", apiProductsRoutes);
apiRoutes.use("/orders", apiOrderRoutes);


module.exports = apiRoutes;
