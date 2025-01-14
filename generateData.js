const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');

// Gerar os dados
const data = [

    {

        "nome": faker.person.firstName(),
        "email": faker.internet.email(),
        "password": faker.internet.password(),
        "administrador": "true"
    },
    {

        "nome": faker.person.firstName(),
        "email": faker.internet.email(),
        "password": faker.internet.password(),
        "administrador": "false"
    },
    {
        "_id":"N64P75Kfvqu0p6NE",
        "nome": faker.person.firstName(),
        "email": faker.internet.email(),
        "password": faker.internet.password(),
        "administrador": "false"
    },



];

// Caminho correto para a pasta fixtures do Cypress
const filePath = path.join(__dirname, 'cypress', 'fixtures', 'data.json');

// Escrever o arquivo JSON na pasta fixtures
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

console.log(`Arquivo JSON gerado em: ${filePath}`);
