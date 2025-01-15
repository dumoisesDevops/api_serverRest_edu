describe('Testes de api - endpoint Login', () => {

  it('Login com usuário válido', () => {
    cy.postLogin(true).then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('authorization');
    });
  });

  it('Login com usuário inválido', () => {
    cy.postLogin(false).then(response => {
      expect(response.status).to.eq(401);
    });
  });

  it('Login com usuário aleatório', () => {
    cy.postLogin().then(response => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message", "Login realizado com sucesso");
    });
  });
});
