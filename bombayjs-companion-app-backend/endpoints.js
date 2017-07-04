console.log('++hdd++ endpoints.js');
window.endpoints = {
    getStocksEndpoint: function() {
      return 'http://localhost:4200/finance/info?client=ig';
      // return 'http://finance.google.com/finance/info?client=ig';
    }
}
