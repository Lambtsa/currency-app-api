const { app } = require('./app');

const port = process.env.PORT || 3000;

/* eslint-disable-next-line */
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
