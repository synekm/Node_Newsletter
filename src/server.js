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
        console.log(`Přihlašuji email ${dotaz.body.email}!`)
        odpoved.send(`Přihlašuji email ${dotaz.body.email}!`);
    } else {
        console.log(`${dotaz.body.email} je již přihlášen.`)
        odpoved.send(`${dotaz.body.email} je již přihlášen.`);
    }
});

server.post('/odhlasit', (dotaz, odpoved) => {
    if (database.get(dotaz.body.email) == undefined) {
        console.log(`${dotaz.body.email} je již odhlášen.`)
        odpoved.send(`${dotaz.body.email} je již odhlášen.`);
    } else {
        database.delete(dotaz.body.email);
        console.log(`Odhlašuji email ${dotaz.body.email}!`)
        odpoved.send(`Odhlašuji email ${dotaz.body.email}!`);
    }
});

server.use(express.static(path.join(__dirname, 'www')));

server.listen(port, () => {
    console.log(`Server bezi na portu ${port}...`);
});