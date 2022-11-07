describe('My First Test', () => {
    it('Visits the site', () => {
        cy.visit('https://jixlen999.github.io/calculator-react-redux/');
    });
    it('Click button with number 1', () => {
        cy.get('[data-cy="key-1"]');
    });
});
