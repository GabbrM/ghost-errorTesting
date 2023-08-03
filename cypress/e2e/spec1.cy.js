import LoginPage from '../support/pageObjects/loginPage';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:2368/ghost/#/site');

    LoginPage.login("heyshaske@gmail.com", "HolaHelloHi123");

    // Verifica que la URL existe (es decir, que está presente en la página actual)
    cy.url().should('exist');
  });
});
