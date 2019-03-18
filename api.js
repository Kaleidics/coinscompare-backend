const axios = require('axios');

const api = {
    fetchCoins: function () {
        const searchUrl = `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD&api_key=${process.env.API_KEY}`;
        return axios.get(searchUrl)
            .then(response => response)
    }
};

module.exports = api;