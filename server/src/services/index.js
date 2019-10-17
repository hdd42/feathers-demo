const users = require('./users/users.service.js');
const products = require('./products/products.service.js');
const externalProducts = require('./external-products/external-products.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(products);
  app.configure(externalProducts);
};
