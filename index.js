require('dotenv').config();
const { app } = require('./app');
require('./modules/connect_db');

const port = process.env.PORT || 8080;

/* eslint-disable-next-line */
app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
