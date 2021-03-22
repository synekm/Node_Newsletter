const path = require('path');
const express = require('express');

const server = express();

const port = 8000;

server.use(express.json());

server.post('/post', (dotaz, odpoved) => {
    console.log(dotaz.body);
});

server.use(express.static(path.join(__dirname, 'www')));

server.listen(port, () => {
    console.log(`Server bezi na portu ${port}...`)
});