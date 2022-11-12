/* eslint-disable no-undef */
describe('Visit the site, change pages', () => {
  it('Go to the settings, check dark and light theme', () => {
    cy.visit('/');
    cy.get('[data-cy="settings"]').click();
    cy.url().should('include', '/settings');
    cy.get('[data-cy="theme-switcher"]').select('dark');
    cy.get('[data-cy="app"]').should('have.css', 'background-color', 'rgb(62, 54, 73)');
    cy.get('[data-cy="theme-switcher"]').select('light');
    cy.get('[data-cy="app"]').should('have.css', 'background-color', 'rgb(252, 247, 246)');
  });
});
