const express = require('express');
const speakerRoute = require('./speaker');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.render('index');
    });

    router.use('/speakers', speakerRoute());
    router.use('/feedback', feedbackRoute());

    return router;
}