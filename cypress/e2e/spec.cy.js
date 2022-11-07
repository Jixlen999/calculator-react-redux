describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('https://example.cypress.io');
    });
    it('Finds focus', () => {
        cy.contains('focus').click();
        cy.url().should('include', '/commands/actions');
        cy.get('.action-email')
            .type('fake@email.com')
            .should('have.value', 'fake@email.cm');
    });
});
