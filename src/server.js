const path = require('path');
const express = require('express');
const jsondb = require('simple-json-db');
const server = express();

const port = 8000;

server.use(express.json());

server.post('/prihlasit', (dotaz, odpoved) => {
    console.log(dotaz.body);
});

server.post('/odhlasit', (dotaz, odpoved) => {
    console.log(dotaz.body);
});

server.use(express.static(path.join(__dirname, 'www')));

server.listen(port, () => {
    console.log(`Server bezi na portu ${port}...`);
});