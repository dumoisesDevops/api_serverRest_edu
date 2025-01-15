describe('Testes de API endpoint usuario ', () => {

  // Carrega o arquivo JSON com o faker
  before(() => {
    cy.exec('node generateData.js').its('code').should('eq', 0);  // Verifica se o comando foi bem-sucedido
    cy.fixture('data').as('testData'); // Lê o arquivo 'data.json' na pasta fixtures
  });

  it('Nao permite cadastrar  usuario com email existente na base', () => {
    cy.postUsuario("Fulano da Silva").then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('message', 'Este email já está sendo usado');

    });
  });

  it('Deve cadastrar novo usuario como administrador', () => {
    cy.postUsuarioValido("true").then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("message", "Cadastro realizado com sucesso");
    });
  });

  it('Deve cadastrar novo usuario', () => {
    cy.postUsuarioValido("false").then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("message", "Cadastro realizado com sucesso");
    });
  }); 0

  it('Deve listar usuários com sucesso', () => {
    cy.getUsuarios().then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Nao existe id valido para excluir na base', () => {
    cy.deleteUsuarioValido("0v3CRatrxlwVozw5").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message", "Nenhum registro excluído")

    });
  });

  it('Deve excluir registro', () => {
    // Primeiro, faça a requisição para buscar todos os registros
    cy.request('GET', '/usuarios').then((response) => {
      expect(response.status).to.eq(200);

      // Acessar a propriedade 'usuarios' que contém o array
      const usuarios = response.body.usuarios;

      // Verifique se existem usuários na lista
      expect(usuarios).to.have.length.greaterThan(0);

      // Escolha um ID aleatório da lista de usuários
      const usuarioAleatorio = usuarios[Math.floor(Math.random() * usuarios.length)];

      // Exclua o usuário com o ID aleatório
      cy.deleteUsuarioValido(usuarioAleatorio._id).then((deleteResponse) => {
        expect(deleteResponse.status).to.eq(200);
        expect(deleteResponse.body).to.have.property("message", "Registro excluído com sucesso");
      });
    });
  });


  it('Deve listar usuario por id', () => {
    cy.getUsuarioValido("0LtzMGyWfwsmGToq").then((response) => {
      expect(response.status).to.eq(200);
    });
  });

});



