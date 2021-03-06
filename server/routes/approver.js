let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let approver = require('../models/approverData'); //requiring the model classes
let logger = require('../services/app.logger');
let con = require('../config/config');
let httpstatus = require('../config/httpmsg');

//get method for new access card record
router.get('/find', function(req, res, next) {
    try {
        approver.find({}, function(err, data) {
            if (err) {
                res.send({ success: false, message: '', data: err.toString() });
            } else
            if (!data) {
                return res.status(httpstatus.nocontent.code).json({ success: false, message: 'approver data not found', data: err });
            } else {
                //maintaining logger if database hits approver details and they are fetched
                logger.error(con.messages.approver_get)
                return res.status(httpstatus.success.code).json({ success: true, message: con.messages.approver_get, data: data });
            }
        });
    } catch (error) {
        //maintaining logger if database donot insert approver details
        logger.error(con.messages.approver_get_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: httpstatus.internalerror.msg, data: error.toString() });
    }
});

//post method for new access card record
router.post('/employee', function(req, res, next) {
    try {
        approver.create(req.body).then(function(data, err) {
            if (err) {
                return res.send({ success: false, message: '' });
            } else
            if (!data) {
                return res.status(httpstatus.nocontent.code).json({ success: false, message: 'approver data not found' });
            } else {
                //maintaining logger if database hits employee details are fetched
                logger.info(con.messages.approver_post);
                return res.status(httpstatus.success.code).send({ success: true, message: con.messages.approver_post, data: data })
            }
        })
    } catch (error) {
        //maintaining logger if database donot hit approver details
        logger.error(con.messages.approver_post_error)
        return res.status(httpstatus.internalerror.code).json({ success: false, message: httpstatus.internalerror.msg, data: error.toString() });
    }
})

module.exports = router;