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
