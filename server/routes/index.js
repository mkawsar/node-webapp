const express = require('express');
const speakerRoute = require('./speaker');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = (param) => {
    const { speakerService } = param;
    router.get('/', async (req, res, next) => {
        // const speakersList = await speakerService.getListShort();
        // const artwork = await speakerService.getAllArtwork();
        try {
            const promises = [];
            promises.push(speakerService.getListShort());
            promises.push(speakerService.getAllArtwork());

            const results = await Promise.all(promises);

            return res.render('index', {
                page: 'Home',
                speakersList: results[0],
                artwork: results[1],
            });
        } catch (err) {
            return next(err);
        }
    });

    router.use('/speakers', speakerRoute(param));
    router.use('/feedback', feedbackRoute(param));

    return router;
}