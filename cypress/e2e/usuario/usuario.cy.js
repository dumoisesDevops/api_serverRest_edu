describe('Testes de API', () => {
    it('Deve validar o retorno do endpoint GET /usuarios', () => {
      cy.request('GET', '/usuarios').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('usuarios');
        // Valide mais campos da resposta conforme necessário
      });
    });
  
    it('Deve criar um novo usuário via POST /usuarios', () => {
      cy.request('POST', '/usuarios', {
        nome: 'João Silva',
        email: 'joao@exemplo.com',
        senha: 'senha123',
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
      });
    });
  });
  