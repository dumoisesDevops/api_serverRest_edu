
Desafio de Automação de Testes de API

## 📋 Descrição 
- Para automação dos testes foi utilizado o Framework [Cypress](https://www.cypress.io/).

- Utilizado o [Allure Reports](hhttps://docs.qameta.io/allure/#_installing_a_commandline), como gerenciador de relatórios.

## 🚀Instalação
### Pré-requisitos
- Fazer a instalação do [Node.Js](https://nodejs.org/en/).
- Realizar a instalação do [Cypress](https://www.cypress.io/)
* Recomendamos utilizar a versão do Cypress do projeto (x11.2.0)
```
 npm install cypress@11.2.0
```
- Para realizar a instalação do gerenciador de relatórios, siga os tutoriais abaixo:
- [Scoop](https://scoop.sh/)
- [Allure](https://docs.qameta.io/allure/)

### Instalando Depedências
- Com o Node.Js e o Cypress devidamente instalados em sua máquina, acesse o diretório do projeto pelo **cmd** ou **powershell** e digite o comando abaixo para instalar as depedências:
```
 npm install
```
- Após esses comandos serem digitados será instalado todas as dependências necessárias para a execução do projeto.

### Executando os testes
- Para a execução dos testes utilize o comando abaixo:
```
npm run test
```
- Para gerar o relatório com Allure report:
```
npm run allure:generate
```
- Para exibir o relatório com Allure report:
```
npm run allure:open
```
Obs: Sempre que for executar os testes, é necessário excluir as pastas 'allure-report' e 'allure-results'. 
- Utilize o comando:
```
npm run allure:clear
```
## Padrão de Commits
```
git commit -m "<tipo>: descrição"
```

## 📌 Autor/Contato

Para qualquer dúvida sobre o projeto:

[Eduardo moises](eduardo.moisesqa@hotmail.com) 
