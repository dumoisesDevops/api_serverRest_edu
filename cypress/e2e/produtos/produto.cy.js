describe('Testes de API endpoint produto ', () => {
    beforeEach(() => {

        cy.login();  // Executa o login e armazena o token no localStorage
    });

    it('Deve listar todos produtos', () => {
        cy.getProdutos().then(response => {
            expect(response.status).to.eq(200);;
        });
    });

    it('Deve listar usuario por id', () => {
        cy.getProdutoValido("BeeJh5lz3k6kSIzA").then((response) => {
            expect(response.status).to.eq(200);
        });
    });

  
});

