describe('Testes de API endpoint produto ', () => {

    it('Deve cadastrar produto com dados validos', () => {
        cy.postProduto(true).then(response => {
            expect(response.status).to.eq(200);;
        });
    });



    it('Naó permite cadastrar produto com dados validos', () => {
        cy.postProduto(false).then(response => {
            expect(response.status).to.eq(400);;
            expect(response.body).to.have.property("message",  "Já existe produto com esse nome")
        });
    });


});

