const db = require('../db');

module.exports.index = (req, res) => {
    res.render('products/index', {
        allProducts: db.get('products').value(),
        products: db.get('products').value().slice(0, 8)
    });
};

module.exports.discoverPage = (req, res) => {
    let page = parseInt(req.query.page); // n
    let perPage = 8; // x

    let start = (page - 1) * perPage;
    let end = page * perPage;

    res.render('products/index', {
        allProducts: db.get('products').value(),
        products: db.get('products').value().slice(start, end)
    });
};