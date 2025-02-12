describe('Testes de API endpoint usuario', () => { 
  before(() => {
    cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((response) => {
      expect(response.status).to.eq(200);
      cy.wrap(response.body[0]).as('testUser');
    });
  });

  it('Deve cadastrar novo usuario', function () {
    cy.get('@testUser').then((testUser) => {
      cy.request({
        method: 'POST',
        url: '/usuarios',
        body: {
          nome: testUser.name, 
          email: `${testUser.email.split('@')[0]}+test${Date.now()}@${testUser.email.split('@')[1]}`, 
          password: 'Sam@370750',
          administrador: 'true'
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property("message", "Cadastro realizado com sucesso");
      });
    });
  });
});
