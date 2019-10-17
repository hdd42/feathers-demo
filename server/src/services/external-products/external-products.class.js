const httpClient = require("axios");// request modulu yerine, axios u tercih edebilirsiniz, daha hizli ve kolaydir.

exports.ExternalProducts = class ExternalProducts {
  constructor (options) {
    this.options = options || {};
    this.events = ['newProductAdded'];
   // httpClient.defaults.baseURL = 'https://api.example.com/api';
    httpClient.defaults.baseURL = 'http://localhost:4000/api';

    // httpClient.defaults.headers.common['Authorization'] = "AUTH_TOKEN";

    httpClient.defaults.headers.common['Content-Type'] = "application/json";
    this.httpAuthOptions = {
      username: 'admin_email',
      password: 'auto-generated API key'
    };


  }

  async find (params) {
    const result = await httpClient.get("/products",{auth:this.httpAuthOptions});
    return result.data
  }

  async get (id, params) {
    const result = await httpClient.get(`/products/${id}`,{auth:this.httpAuthOptions});
    return result.data
  }

  async create (data, params) {

    const result = await httpClient.post(`/products`,data,{auth:this.httpAuthOptions});
    return result.data
  }

  /*async update (id, data, params) {
    return  httpClient.put(`/products/${id}`,data,{auth:this.httpAuthOptions});
  }

  async patch (id, data, params) {
    return  httpClient.patch(`/products`,data,{auth:this.httpAuthOptions});
  }*/

  async remove (id, params) {
   let result =  await httpClient.delete(`/products/${id}`,{auth:this.httpAuthOptions})
   return result.data
  }
}
