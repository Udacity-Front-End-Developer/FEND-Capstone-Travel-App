const app = require('./app');

const PORT = process.env.PORT || 8080;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
