const path = require('path');
const express = require('express');
const jsondb = require('simple-json-db');

const server = express();
const database = new jsondb(path.join('..', 'data', 'emails.json'));

const port = 8000;

server.use(express.json());

server.post('/prihlasit', (dotaz, odpoved) => {
    if (database.get(dotaz.body.email) == undefined) {
        database.set(dotaz.body.email, dotaz.body.email);
        console.log(`Prihlasuji email ${dotaz.body.email}!`)
        odpoved.send(`Prihlasuji email ${dotaz.body.email}!`);
    } else {
        console.log(`${dotaz.body.email} je jiz prihlasen.`)
        odpoved.send(`${dotaz.body.email} je jiz prihlasen.`);
    }
});

server.post('/odhlasit', (dotaz, odpoved) => {
    if (database.get(dotaz.body.email) == undefined) {
        console.log(`${dotaz.body.email} je jiz odhlasen.`)
        odpoved.send(`${dotaz.body.email} je jiz odhlasen.`);
    } else {
        database.delete(dotaz.body.email);
        console.log(`Odhlasuji email ${dotaz.body.email}!`)
        odpoved.send(`Odhlasuji email ${dotaz.body.email}!`);
    }
});

server.use(express.static(path.join(__dirname, 'www')));

server.listen(port, () => {
    console.log(`Server bezi na portu ${port}...`);
});