const express = require('express');

const app = express();

const path = require('path');

const port = 3030;

app.get ('/', (res, req) => res.sendFile(path.resolve('./views/home.html')));

app.listen(port, () => console.log(`El servidor funcionando en el puerto ${port}`));

