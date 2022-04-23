const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const productsRouter = require('./src/route/productsRouter');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index', {
        username: "Phongsak",
        "customer": ["phongsak", "yotsaodee", "mii"]
    });
});

app.use("/products", productsRouter);

app.listen(PORT, () => {
    console.log('listening on port' + chalk.green(":" + PORT));
});