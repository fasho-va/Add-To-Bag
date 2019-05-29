const express = require('express');
const bodyparser = require('body-parser');
const port = 3002;
// const db = require('../db/index.js');

const app = express();

app.use(bodyparser.json());
app.use(express.static('public'));

app.listen(port, console.log(`Listening on port... ${port}`));



