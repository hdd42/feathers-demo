// Initializes the `externalProducts` service on path `/external-products`
const { ExternalProducts } = require('./external-products.class');
const hooks = require('./external-products.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/external-products', new ExternalProducts(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('external-products');

  service.hooks(hooks);
};
