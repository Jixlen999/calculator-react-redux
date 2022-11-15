/* eslint-disable no-undef */
describe('Visit the site, homeCC page', () => {
  it('Visit the site', () => {
    cy.visit('/');
    cy.get('[data-cy="homeCC"]').click();
    cy.url().should('include', '/home-cc');
  });
});
describe('Testing keypad buttons and display', () => {
  it('Click button with number 1 and check display value for being = 1', () => {
    cy.get('[data-cy="key-1"]').click();
    cy.get('[data-cy="display"]').should('have.text', '1');
  });
  it('Click C to clear the input', () => {
    cy.get('[data-cy="key-C"]').click();
    cy.get('[data-cy="display"]').should('have.text', '0');
  });
  it('Click 0123456789 and check display for being = 0123456789', () => {
    for (let i = 0; i <= 9; i += 1) {
      cy.get(`[data-cy="key-${i}"]`).click();
    }
    cy.get('[data-cy="display"]').should('have.text', '0123456789');
  });
  it('Click CE 10 times and expect display = 0', () => {
    for (let i = 0; i <= 9; i += 1) {
      cy.get(`[data-cy="key-CE"]`).click();
    }
    cy.get('[data-cy="display"]').should('have.text', '0');
  });
});

describe('Testing operations', () => {
  it('Check 155 + 28 = 163', () => {
    cy.get('[data-cy="key-1"]').click();
    cy.get('[data-cy="key-3"]').click();
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-2"]').click();
    cy.get('[data-cy="key-8"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="display"]').should('have.text', '163');
  });
  it('Check previous answer(163) + 10 = 173', () => {
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-1"]').click();
    cy.get('[data-cy="key-0"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="display"]').should('have.text', '173');
  });
  it('Check previous answer(173) - 100 = 73. Clear = 0', () => {
    cy.get('[data-cy="key--"]').click();
    cy.get('[data-cy="key-1"]').click();
    cy.get('[data-cy="key-0"]').click();
    cy.get('[data-cy="key-0"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="display"]').should('have.text', '73');
    cy.get('[data-cy="key-C"]').click();
    cy.get('[data-cy="display"]').should('have.text', '0');
  });
  it('Check 2675 - 145.22 = 2529.78', () => {
    cy.get('[data-cy="key-2"]').click();
    cy.get('[data-cy="key-6"]').click();
    cy.get('[data-cy="key-7"]').click();
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key--"]').click();
    cy.get('[data-cy="key-1"]').click();
    cy.get('[data-cy="key-4"]').click();
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key-."]').click();
    cy.get('[data-cy="key-2"]').click();
    cy.get('[data-cy="key-2"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="display"]').should('have.text', '2529.78');
    cy.get('[data-cy="key-C"]').click();
  });
  it('Check 5670.1 / 145 = 2529.78', () => {
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key-6"]').click();
    cy.get('[data-cy="key-7"]').click();
    cy.get('[data-cy="key-0"]').click();
    cy.get('[data-cy="key-."]').click();
    cy.get('[data-cy="key-1"]').click();
    cy.get('[data-cy="key-/"]').click();
    cy.get('[data-cy="key-1"]').click();
    cy.get('[data-cy="key-4"]').click();
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="display"]').should('have.text', '39.104');
    cy.get('[data-cy="key-C"]').click();
  });
  it('Check 5670 % 145 = 2529.78', () => {
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key-6"]').click();
    cy.get('[data-cy="key-7"]').click();
    cy.get('[data-cy="key-0"]').click();
    cy.get('[data-cy="key-%"]').click();
    cy.get('[data-cy="key-1"]').click();
    cy.get('[data-cy="key-4"]').click();
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="display"]').should('have.text', '15');
    cy.get('[data-cy="key-C"]').click();
  });
  it('Check 5670 / 0 = Division by zero error', () => {
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key-6"]').click();
    cy.get('[data-cy="key-7"]').click();
    cy.get('[data-cy="key-0"]').click();
    cy.get('[data-cy="key-/"]').click();
    cy.get('[data-cy="key-0"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="display"]').should('have.text', 'Division by zero error');
    cy.get('[data-cy="key-C"]').click();
  });
  it('Check 5670 % 0 = Invalid input', () => {
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key-6"]').click();
    cy.get('[data-cy="key-7"]').click();
    cy.get('[data-cy="key-0"]').click();
    cy.get('[data-cy="key-%"]').click();
    cy.get('[data-cy="key-0"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="display"]').should('have.text', 'Invalid input');
    cy.get('[data-cy="key-C"]').click();
  });
  it('Check ±: 5 => -5', () => {
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key-±"]').click();
    cy.get('[data-cy="display"]').should('have.text', '- 5');
  });
  it('Check ±: -5 => 5', () => {
    cy.get('[data-cy="key-±"]').click();
    cy.get('[data-cy="display"]').should('have.text', '5');
    cy.get('[data-cy="key-C"]').click();
  });
  it('Check ±: -5 + ( - 2 ) => -7', () => {
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key-±"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-2"]').click();
    cy.get('[data-cy="key-±"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="display"]').should('have.text', '-7');
    cy.get('[data-cy="key-C"]').click();
  });

  it('Check 56 + ( 3 - ( 7 / 2 ) * 10.2 ) = 23.300', () => {
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key-6"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-("]').click();
    cy.get('[data-cy="key-3"]').click();
    cy.get('[data-cy="key--"]').click();
    cy.get('[data-cy="key-("]').click();
    cy.get('[data-cy="key-7"]').click();
    cy.get('[data-cy="key-/"]').click();
    cy.get('[data-cy="key-2"]').click();
    cy.get('[data-cy="key-)"]').click();
    cy.get('[data-cy="key-*"]').click();
    cy.get('[data-cy="key-1"]').click();
    cy.get('[data-cy="key-0"]').click();
    cy.get('[data-cy="key-."]').click();
    cy.get('[data-cy="key-2"]').click();
    cy.get('[data-cy="key-)"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="display"]').should('have.text', '23.300');
    cy.get('[data-cy="key-C"]').click();
  });
  it('Check 56 + ( 3 - ( 7 / 2 ) ) = 55.5', () => {
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key-6"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-("]').click();
    cy.get('[data-cy="key-3"]').click();
    cy.get('[data-cy="key--"]').click();
    cy.get('[data-cy="key-("]').click();
    cy.get('[data-cy="key-7"]').click();
    cy.get('[data-cy="key-/"]').click();
    cy.get('[data-cy="key-2"]').click();
    cy.get('[data-cy="key-)"]').click();
    cy.get('[data-cy="key-)"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="display"]').should('have.text', '55.5');
    cy.get('[data-cy="key-C"]').click();
  });
  it('Check invalid brackets input: 56 + ( 2 ) ) ', () => {
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key-6"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-("]').click();
    cy.get('[data-cy="key-2"]').click();
    cy.get('[data-cy="key-)"]').click();
    cy.get('[data-cy="key-)"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="display"]').should('have.text', 'Invalid input');
    cy.get('[data-cy="key-C"]').click();
  });
  it('Check invalid brackets input: 2+(3+4))+4+(', () => {
    cy.get('[data-cy="key-2"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-("]').click();
    cy.get('[data-cy="key-3"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-4"]').click();
    cy.get('[data-cy="key-)"]').click();
    cy.get('[data-cy="key-)"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-4"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-("]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="display"]').should('have.text', 'Invalid input');
    cy.get('[data-cy="key-C"]').click();
  });
  it('Check invalid brackets input: 2+(3+4))+4)', () => {
    cy.get('[data-cy="key-2"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-("]').click();
    cy.get('[data-cy="key-3"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-4"]').click();
    cy.get('[data-cy="key-)"]').click();
    cy.get('[data-cy="key-)"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-4"]').click();
    cy.get('[data-cy="key-)"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="display"]').should('have.text', 'Invalid input');
    cy.get('[data-cy="key-C"]').click();
  });
  it('Check valid brackets input: 2+((3+4)+4) = 13', () => {
    cy.get('[data-cy="key-2"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-("]').click();
    cy.get('[data-cy="key-("]').click();
    cy.get('[data-cy="key-3"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-4"]').click();
    cy.get('[data-cy="key-)"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-4"]').click();
    cy.get('[data-cy="key-)"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="display"]').should('have.text', '13');
    cy.get('[data-cy="key-C"]').click();
  });
});

describe('Testing history', () => {
  it('Open history', () => {
    cy.get('[data-cy="open-history"]').click();
  });
  it('Add some history', () => {
    cy.get('[data-cy="key-1"]').click();
    cy.get('[data-cy="key-3"]').click();
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-2"]').click();
    cy.get('[data-cy="key-8"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-1"]').click();
    cy.get('[data-cy="key-0"]').click();
    cy.get('[data-cy="key-="]').click();
  });
  it('Check and clear history', () => {
    cy.get('[data-cy="open-history"]').click();
    cy.get('[data-cy="history"]').should('not.be.empty');
    cy.get('[data-cy="delete-history"]').click();
    cy.get('[data-cy="history"]').should('be.empty');
  });
});

describe('Testing "Clear all" button', () => {
  it('Add some history', () => {
    cy.get('[data-cy="key-1"]').click();
    cy.get('[data-cy="key-3"]').click();
    cy.get('[data-cy="key-5"]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-2"]').click();
    cy.get('[data-cy="key-8"]').click();
    cy.get('[data-cy="key-="]').click();
    cy.get('[data-cy="key-+"]').click();
    cy.get('[data-cy="key-1"]').click();
    cy.get('[data-cy="key-0"]').click();
    cy.get('[data-cy="key-="]').click();
  });
  it('Open settings', () => {
    cy.get('[data-cy="settings"]').click();
    cy.url().should('include', '/settings');
  });
  it('Click "Clear all" and check history and display', () => {
    cy.get('[data-cy="clear-all"]').click();
    cy.get('[data-cy="homeCC"]').click();
    cy.get('[data-cy="history"]').should('be.empty');
    cy.get('[data-cy="display"]').should('have.text', '0');
  });
});
