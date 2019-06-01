const axios = require('axios');

const api = {
    fetchCoins: function () {
        const searchUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
        return axios.get(searchUrl)
            .then(response => response)
    },
    fetchOne: function(coinId) {
        const searchUrl = `https://api.coingecko.com/api/v3/coins/${coinId}`;
        return axios.get(searchUrl)
            .then(response => response)
    },
    fetchOne24: function(coinId) {
        const searchUrl = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30`;
        return axios.get(searchUrl)
            .then(response => response)
    }
};

module.exports = api;