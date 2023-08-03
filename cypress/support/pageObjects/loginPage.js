class LoginPage {
  getEmailInput() {
    return cy.get("#identification");
  }

  getPasswordInput() {
    return cy.get("#password");
  }

  getSignInButton() {
    return cy.get('[data-test-button=sign-in] span');
  }

  login(email, password) {
    this.getEmailInput().click().type(email).as('emailInput');
    this.getPasswordInput().click().type(password).as('passwordInput');
    this.getSignInButton().click();
  }
}

export default new LoginPage();
