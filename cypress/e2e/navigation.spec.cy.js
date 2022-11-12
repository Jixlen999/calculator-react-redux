/* eslint-disable no-undef */
describe('Visit the site, change pages', () => {
  it('Visit the site', () => {
    cy.visit('/');
    cy.get('[data-cy="homeCC"]').click();
    cy.url().should('include', '/home-cc');
    cy.get('[data-cy="settings"]').click();
    cy.url().should('include', '/settings');
    cy.get('[data-cy="homeFC"]').click();
  });
});
