const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.render('speakers');
    });

    router.get('/:name', (req, res, next) => {
        res.send(`Speaker details page for ${req.params.name}`);
    });

    return router;
}