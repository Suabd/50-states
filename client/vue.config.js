module.exports = {
  devServer: {
    //vue client will be able to make requests '/api/states'
    //'http://127.0.0.1:3000/api/states'
    proxy: 'http://127.0.0.1:3000'
  }
}