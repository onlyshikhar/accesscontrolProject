let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');

//requiring the model classes
let thirdParty = require('../models/thirdparty.request');
let config = require('../config/config');
let sqlCon = require('./sqlconnection');

// query to the sql database and get the records
router.get('/getdata/:empId', (req, res) => {
    var request = sqlCon.getSqlDb();
    request.query(config.query + req.params.empId + `'`, function(err, recordset) {
        res.json(recordset.recordsets)
    });
});


//retrieve data from third party table
router.get('/thirdpartydetails', function(req, res, next) {
    thirdParty.find({}, function(err, data) {
        res.json(data);
    });
});

//insert data into third party table
router.post('/newthirdparty', function(req, res, next) {
    thirdParty.create(req.body).then(function(data) {
        res.send(data)
    })
})

// exporting the router
module.exports = router;