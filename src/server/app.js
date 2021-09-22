const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const apiCalls = require('./apiCalls');

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

/*
** This is a test route
*/
app.get('/test', (req, res) => {
    res.send({ success: 'true' });
});

/**
* Renders the page index.
*/
app.get('/', (_req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
});

/**
* Handles post requests coming from user country input.
*/
app.post('/api/coordination', (req, res) => {
    apiCalls.geonames(req.body.val, process.env.GEONAME_KEY)
        .then((data) => res.send(data));
});

/**
* Handles post requests for getting city image.
*/
app.post('/api/image', (req, res) => {
    apiCalls.fetchImage(req.body.trip, process.env.PIXABAY_KEY)
        .then((data) => res.send(data));
});

/**
* Handles post requests for getting weather information.
*/
app.post('/api/weather', (req, res) => {
    apiCalls.fetchWeather(req.body.trip, req.body.days, process.env.WEATHER_KEY)
        .then((data) => res.send(data));
});

/**
* Renders the page trips.
*/
app.get('/trips', (_req, res) => {
    res.sendFile(path.resolve('dist/trips.html'));
});

/*
** exports the app instance.
*/
module.exports = app;
