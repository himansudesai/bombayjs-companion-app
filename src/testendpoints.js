console.log('test endpoints.js');
window.endpoints = {
    getStocksEndpoint: function() {
        return 'http://localhost:4200/testfinance/info?client=ig';
    }
}
