
'use strict';

module.exports = function (models, baucis) {
    var controller = baucis.rest(models.bulkpackage);
    controller.post('/addproducts/:id', function (req, res, next) {
        models.bulkpackage.findById(req.params.id, function (err, bulkpackage) {
            bulkpackage.addProducts(function (product) {
                res.json(product);
                next(err);
            });
        });
    });
    controller.swagger.apis.push({
        'path': '/bulkpackages/addproducts/{bulkpackageId}',
        'description': 'Add bulkpackage of products to store.',
        'operations': [
            {
                'httpMethod': 'POST',
                'nickname': 'getProducts',
                'responseClass': 'Product',
                'summary': 'Add new bulkpackage of products'
            }
        ]
    });
};
