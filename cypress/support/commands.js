// Post usuario ja existente 
Cypress.Commands.add('postUsuario', (nome) => {
    cy.fixture('Usuario/postUsuario').then((items) => {
        const specificItem = items.find(item => item.nome === nome);
        // Realiza  o cadastro do novo usuario
        cy.api({
            url: `${Cypress.env('API_URL')}/usuarios`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: specificItem,
            failOnStatusCode: false
        }).then(response => {
            return response;
        });
    });
});
// Post para criar novo usuario 
Cypress.Commands.add('postUsuarioValido', (administrador) => {
    cy.fixture('data').then((items) => {
        const specificItem = items.find(item => item.administrador === administrador);
        // Realiza  o cadastro do novo usuario
        cy.api({
            url: `${Cypress.env('API_URL')}/usuarios`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: specificItem,
            failOnStatusCode: false
        }).then(response => {
            return response;
        });
    });
});
// Get listar todos usuario 
Cypress.Commands.add('getUsuarios', () => {
    cy.api({
        url: `${Cypress.env('API_URL')}/usuarios`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => {
        return response;
    });
});
// Delet usuario  administrador
Cypress.Commands.add('deleteUsuarioValido', (id) => {
    cy.fixture('Usuario/deleteusuario').then((items) => {
        const specificItem = items.find(item => item._id === id);
        cy.api({
            url: `${Cypress.env('API_URL')}/usuarios/${id}`,
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: specificItem,
            failOnStatusCode: false
        }).then(response => {
            return response;
        });
    });
});

// Alterar usuario 
Cypress.Commands.add('putUsuarioValido', (id) => {
    cy.fixture('data').then((items) => {
        const specificItem = items.find(item => item._id === id);
        if (specificItem) {

            const { _id, ...userData } = specificItem;
            cy.request({
                url: `${Cypress.env('API_URL')}/usuarios/${id}`,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: userData,
                failOnStatusCode: false
            }).then((response) => {
                return response;
            });
        } else {
            throw new Error(`Usuário com o ID ${id} não foi encontrado na fixture.`);
        }
    });
});
// Get Listar usuario por ID
Cypress.Commands.add('getUsuarioValido', (id = '') => {
    const url = id ? `${Cypress.env('API_URL')}/usuarios/${id}` : `${Cypress.env('API_URL')}/usuarios`;
    cy.request({
        url: url, 
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => {
        return response;
    });
});

// Post login 
Cypress.Commands.add('postLogin', (valido) => {
    cy.fixture('login/postLogin').then((items) => {
      let selectedUser;
      if (valido !== undefined) {
        selectedUser = items.find(item => item.valido === valido);
      }
      if (!selectedUser) {
        const randomIndex = Math.floor(Math.random() * items.length);
        selectedUser = items[randomIndex];
      }
  
      // Realizar o login com o usuário selecionado
      cy.api({
        url: `${Cypress.env('API_URL')}/login`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          email: selectedUser.email,
          password: selectedUser.password
        },
        failOnStatusCode: false
      }).then(response => {
        return response;
      });
    });
  });
  // Post criacao de produtos  
Cypress.Commands.add('postProduto', (valido) => {
    cy.fixture('dataProdutos').then((items) => {
      let selectedProdutos;
      if (valido !== undefined) {
        selectedProdutos = items.find(item => item.valido === valido);
      }
      if (!selectedProdutos) {
        const randomIndex = Math.floor(Math.random() * items.length);
        selectedProdutos = items[randomIndex];
      }
  
      // Realizar cadastro com produto selecionado
      cy.api({
        url: `${Cypress.env('API_URL')}/produtos`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          nome: selectedProdutos.nome,
          preco: selectedProdutos.preco,
          descricao: selectedProdutos.descricao,
          quantidade: selectedProdutos.quantidade,
        },
        failOnStatusCode: false
      }).then(response => {
        return response;
      });
    });
  });
  
