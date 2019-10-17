const app = require('../../src/app');

describe('\'externalProducts\' service', () => {
  it('registered the service', () => {
    const service = app.service('external-products');
    expect(service).toBeTruthy();
  });
});
