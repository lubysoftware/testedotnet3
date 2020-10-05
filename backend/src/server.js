const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

require('./database');


// Enables CORS
app.use(cors({ origin: true }));

app.use(express.json());
app.use(routes);

app.listen(3333);