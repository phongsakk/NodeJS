const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const productRouter = express.Router();

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
    res.render('product', {
        "products": [{
            "productID": 1,
            "productTitle": "Phongsak",
            "productPrice": 200
        }, {
            "productID": 2,
            "productTitle": "Yotsaodee",
            "productPrice": 300
        }, {
            "productID": 3,
            "productTitle": "Mii",
            "productPrice": 50
        }]
    });
});

productRouter.route("/1").get((req, res) => {
    res.send('Product 1');
});

app.use("/products", productRouter);

app.listen(PORT, () => {
    console.log('listening on port' + chalk.green(":" + PORT));
});