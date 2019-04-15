'use strict';

const express = require('express');
const cors = require('cors');
const app =express();
const api = require('./api');

app.use(express.json());
app.use(
    cors({
        origin: ['http://localhost:3000', 'https://coinscompare.netlify.com', 'https://www.coinscompare.xyz']
    })
);

app.get('/', (req, res) => {
    api.fetchCoins().then(coins => {
        console.log('heres the data:', coins.data);
        res.json(coins.data);
    });
});

app.get('/:id', (req, res) => {
    api.fetchOne(req.params.id).then(coin => {
        console.log('heres the data:', coin.data);
        res.json(coin.data);
    });
});

app.get('/:id/price_data', (req, res) => {
    api.fetchOne(req.params.id).then(coin => {
        console.log('heres the data:', coin.data);
        res.json(coin.data);
    });
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});