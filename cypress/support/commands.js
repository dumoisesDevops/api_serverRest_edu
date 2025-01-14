import '@shelex/cypress-allure-plugin';


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
    cy.fixture('Usuario/deleteUsuario').then((items) => {
        const specificItem = items.find(item => item._id === id);
        // Realiza  o cadastro do novo usuario
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
