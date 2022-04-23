const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req, res) => {
    res.send('Hello Phongsak.');
});

app.get("/ggez", (req, res) => {
    res.send('GGEZ');
});

app.listen(port, () => {
    console.log('listening on port' + chalk.green(":" + port));
});