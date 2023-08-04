import LoginPage from '../support/pageObjects/loginPage';

describe('Inicio de sesion using pageObjects', () => {
  it('passes', () => {
    cy.visit('http://localhost:2368/ghost/#/site');

    LoginPage.login("heyshaske@gmail.com", "HolaHelloHi123");

    cy.url().should('exist');
  });
});
