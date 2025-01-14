//Token
Cypress.Commands.add('loginUser', () => {
    cy.api({
        url: `${Cypress.env('API_URL')}/api/login`,
        method: 'POST',
        body: {
            username: Cypress.env('USERNAME'),
            password: Cypress.env('PASSWORD')
        },
        failOnStatusCode: false
    }).then(response => { return response })
})

// Post usuario
Cypress.Commands.add('postUsuario', (nome) => {
    cy.fixture('Usuario/postUsuario').then((items) => {
        const specificItem = items.find(item => item.nome === nome);
        // Realiza  o cadastro do novo usuario
        cy.api({
            url: `${Cypress.env('API_URL')}/api/Company`,
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
