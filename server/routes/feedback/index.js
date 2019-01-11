const express = require('express');

const router = express.Router();

module.exports = (param) => {
    const { feedbackService } = param;
    router.get('/', async (req, res, next) => {
        try {
            const feedbackList = await feedbackService.getList();
            return res.render('feedback', {
                page: 'Feedback',
                feedbackList
            });
        } catch (err) {
            return next(err);
        }
    });

    router.post('/', (req, res, next) => {
        res.send('Form sent');
    });

    return router;
}