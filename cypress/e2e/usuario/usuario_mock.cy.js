describe('Testes de API endpoint usuario', () => { 
  before(() => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
      failOnStatusCode: false
    }).then((response) => {
      if (response.status === 200) {
        cy.wrap(response.body[0]).as('testUser');
      } else {
        cy.request('GET', 'https://reqres.in/api/users').then((fallbackResponse) => {
          expect(fallbackResponse.status).to.eq(200);
          cy.wrap(fallbackResponse.body.data[0]).as('testUser');
        });
      }
    });
  });

  it('Deve cadastrar novo usuario', function () {
    cy.get('@testUser').then((testUser) => {
      cy.request({
        method: 'POST',
        url: '/usuarios',
        body: {
          nome: testUser.name || `${testUser.first_name} ${testUser.last_name}`,
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
