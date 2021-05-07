const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello AWS! Lets see if this pushes automatically for a second time'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
