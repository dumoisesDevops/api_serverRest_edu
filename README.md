# Desafio de Automação de Testes de API

## 📋 Descrição 
Para a automação dos testes foi utilizado o framework [Cypress](https://www.cypress.io/),
 com a geração de relatórios através do [Allure Reports](https://docs.qameta.io/allure/#_installing_a_commandline). 
 
 O projeto está configurado com

 **GitHub Actions** para automação da integração contínua, onde os testes são executados simultaneamente em **imagens diferentes**,
  utilizando paralelismo para melhorar a performance.
  
**Massa de dados dinamicas 

**faker**
Além disso, são utilizadas massas de dados geradas dinamicamente com a biblioteca [Faker](https://www.npmjs.com/package/faker)
 para evitar o uso de dados estáticos.
**Mocks API**
Foi  realizado um  teste para cadastrar novos usuarios,  com  api mock 
https://jsonplaceholder.typicode.com/user  e  caso ela falhe para nao quebrar o teste o teste esta  configurado para  buscar em uma pai alternativa
https://reqres.in/api/users

### Relatório Allure
O relatório Allure é gerado automaticamente como artefato no pipeline, permitindo o acesso fácil aos resultados dos testes após cada execução.

## 🚀 Instalação

### Pré-requisitos
1. Instalar o [Node.js](https://nodejs.org/en/).
2. Instalar o [Cypress](https://www.cypress.io/) na versão **11.2.0** (recomendado):


npm install cypress@11.2.0
Instalar o gerenciador de relatórios Allure. Para isso, siga as instruções:
Scoop
Allure
Instalando Dependências
Após a instalação do Node.js e do Cypress, siga os passos abaixo para instalar as dependências do projeto:

Acesse o diretório do projeto usando o terminal (cmd ou PowerShell).
Execute o comando:
bash

Editar
npm install
Esse comando instalará todas as dependências necessárias.
Executando os Testes
Para rodar os testes e gerar relatórios, utilize os seguintes comandos:

Executar os testes:
bash

Editar
npm run test
Gerar o relatório com Allure Report:
bash

Editar
npm run allure:generate
Exibir o relatório:

Editar
npm run allure:open

Observação:
Antes de cada execução de testes, é necessário limpar as pastas allure-report e allure-results para evitar conflitos. 
Utilize o comando:

npm run allure:clear
GitHub Actions & Paralelismo

O pipeline do GitHub Actions foi configurado para executar os testes de forma paralela, rodando os testes simultaneamente em imagens diferentes.
 Isso acelera a execução do conjunto de testes, reduzindo o tempo total de execução.

Padrão de Commits
Siga o padrão abaixo para commits:

git commit -m "<tipo>: descrição"
📌 Autor/Contato
Em caso de dúvidas, entre em contato:

Eduardo Moises

Email: eduardo.moisesqa@hotmail.com
