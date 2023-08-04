describe("Validación de Entrada Numérica", () => {
      
    it("Debe validar una entrada numérica en un formulario de Ghost", () => {

        cy.visit('http://localhost:2368/ghost/')
    
        cy.get("#identification").click().type("heyshaske@gmail.com")
    
        cy.get("#password").click().type("HolaHelloHi123")
    
        cy.get('[data-test-button=sign-in]').find('span').click()
    
        cy.contains('Tags').click({ force: true })
        cy.contains('New tag').click({ force: true })
        cy.get('input[name="name"]').type("abc123", { force: true });
        cy.wait(50)
        

        cy.get('textarea[name="description"]').type("111111")
        cy.contains('Save').click()
  

    });
  });
  