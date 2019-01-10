const express = require('express');
const routes = require('./routes')
const path = require('path');
const createEror = require('http-errors');

const app = express();

// Pug template engine
app.set('view engine', 'pug');
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}
app.set('views', path.join(__dirname, './views'));

// Routes file concat
app.use('/', routes());

// Statics files rendering
app.use(express.static('public'));

// Favicon settings
app.get('/favicon.ico', (req, res, next) => {
    return res.sendStatus(204)
});


// Error handling
app.use((req, res, next) => {
    return next(createError(404, 'File not found'));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    const status = err.status || 500;
    res.locals.status = status;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(status);
    return res.render('error');
});

app.listen(9000);

module.exports = app;