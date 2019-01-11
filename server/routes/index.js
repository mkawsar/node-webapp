const express = require('express');
const speakerRoute = require('./speaker');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (param) => {
    const { speakerService } = param;
    router.get('/', async (req, res, next) => {
        const speakersList = await speakerService.getListShort();
        return res.render('index', {
            page: 'Home',
            speakersList
        });
    });

    router.use('/speakers', speakerRoute(param));
    router.use('/feedback', feedbackRoute());

    return router;
}