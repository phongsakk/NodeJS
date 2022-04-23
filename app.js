const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const productRouter = express.Router();

const products = require('./src/data/products.json');

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

productRouter.route("/").get((req, res) => {
    res.render('products', {
        products: products
    });
});

productRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render('product', {
        product: products[id],
    });
});

app.use("/products", productRouter);

app.listen(PORT, () => {
    console.log('listening on port' + chalk.green(":" + PORT));
});