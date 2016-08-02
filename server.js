/**
 * Created by zhangsha on 16-8-2.
 */


const transformOne = require('./transformer/transformToBarcode');
const transformTwo = require('./transformer/transformToPostCode');

let toBarcode = new transformOne();
let toPostcode = new transformTwo();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extend: true}));

app.post('/postcodetobarcode', (req, res) => {
    res.send(toBarcode.transformToBarcode(req.body.code));
});

app.post('/barcodetopostcode', (req, res) => {
    res.send(toPostcode.transformToPostCode(req.body.code));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
