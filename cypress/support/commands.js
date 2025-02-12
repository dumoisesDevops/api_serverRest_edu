//Token
Cypress.Commands.add('login', () => {
    cy.api({
        url: `${Cypress.env('API_URL')}/login`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            email: 'defaultUser3@example.com',   // Suas credenciais
            password: 'password123'
        }
    }).then(response => {
        const token = response.body.token;
        window.localStorage.setItem('authorization', token);
    });
});


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
Cypress.Commands.add('postProduto', (valido) => {
    const token = window.localStorage.getItem('authorization'); // Pega o token

    cy.fixture('dataProdutos').then((items) => {
        let selectedProdutos;

        if (valido !== undefined) {
            selectedProdutos = items.find(item => item.valido === valido);
        }

        if (!selectedProdutos) {
            const randomIndex = Math.floor(Math.random() * items.length);
            selectedProdutos = items[randomIndex];
        }

        // Realizar cadastro com o produto selecionado
        cy.api({
            url: `${Cypress.env('API_URL')}/produtos`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`, // Aqui o token é passado corretamente
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


// Get listar todos os produtos 
Cypress.Commands.add('getProdutos', () => {
    cy.api({
        url: `${Cypress.env('API_URL')}/produtos`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => {
        return response;
    });
});

// Get produtos por ID
Cypress.Commands.add('getProdutoValido', (id) => {
    cy.fixture('produto/getProduto').then((items) => {
        const specificItem = items.find(item => item._id === id);
        cy.api({
            url: `${Cypress.env('API_URL')}/produtos/${id}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            failOnStatusCode: false
        }).then(response => {
            return response;
        });
    });
});
// Delet produto por ID
Cypress.Commands.add('deleteProdutoValido', (id) => {
    cy.fixture('produto/deleteProduto').then((items) => {
        const specificItem = items.find(item => item._id === id);
        cy.api({
            url: `${Cypress.env('API_URL')}/produtos/${id}`,
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
// cadatrar produtos 
Cypress.Commands.add('putProdutoValido', (id) => {
    cy.fixture('dataProdutos').then((items) => {
        const specificItem = items.find(item => item._id === id);
        if (specificItem) {

            const { _id, ...userData } = specificItem;
            cy.request({
                url: `${Cypress.env('API_URL')}/produtos/${id}`,
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
            throw new Error(`Produto com o ID ${id} não foi encontrado na fixture.`);
        }
    });
});
// Get Listar usuario por ID
Cypress.Commands.add('getUsuarioValido', (id) => {
    cy.fixture('data').then((items) => {
        const specificItem = items.find(item => item._id === id);
        cy.request({
            url: `${Cypress.env('API_URL')}/usuarios/${id}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            return response;
        });
    });
});