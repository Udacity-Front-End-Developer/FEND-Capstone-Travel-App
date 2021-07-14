const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(express.static('dist'));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    helmet({
        contentSecurityPolicy: {
            directive: {
                ...helmet.contentSecurityPolicy.getDefaultDirectives(),
                // eslint-disable-next-line quotes
                "script-src": ["'self'", "'unsafe-inline'", "example.com"],
            },
        },
    }),
);

app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
});

app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
    const status = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(status);
    res.json({
        msg: error.msg,
        stack: error.stack,
    });
});

module.exports = app;
