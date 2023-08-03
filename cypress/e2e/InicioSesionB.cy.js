describe('Inicio de sesion Basico', () => {
    it('passes', () => {
      cy.visit('http://localhost:2368/ghost/')
  
      cy.get("#identification").click().type("heyshaske@gmail.com")
  
      cy.get("#password").click().type("HolaHelloHi123")
  
      cy.get('[data-test-button=sign-in]').find('span').click()
  
      cy.wait(5000)
      cy.get('#ember19').click()
  
      cy.get('.relative-hidden')
    }) 
  })