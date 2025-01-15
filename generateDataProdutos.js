const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');

// Gerar os dados
const data = [
  {
    "nome": faker.commerce.productName(),
    "preco": faker.commerce.price(),
    "descricao": faker.commerce.productDescription(),
    "quantidade": faker.number.int({ min: 1, max: 3 }), // Correção: faker.number.int()
    "valido": true
  }
];

// Caminho correto para a pasta fixtures do Cypress
const filePath = path.join(__dirname, 'cypress', 'fixtures', 'dataProdutos.json');

// Escrever o arquivo JSON na pasta fixtures
fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

console.log(`Arquivo JSON gerado em: ${filePath}`);
