'use strict';

const express = require('express');
const cors = require('cors');
const app =express();
const api = require('./api');

app.use(express.json());
app.use(
    cors({
        origin:  ['http://localhost:3000','https://coinscompare.netlify.com']
    })
);

app.get('/', (req, res) => {
    api.fetchCoins().then(coins => {
        console.log('heres the data:', coins.data);
        res.json(coins.data);
    });
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});