describe('Inicio de sesión incorrecto', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/')
    })
  
    it('Credenciales incorrectas', () => {
      // Ingresa credenciales incorrectas en los campos de inicio de sesión
      cy.get('input[name="identification"]').type('usuario')
      cy.get('input[name="password"]').type('contraseña')
      cy.get('button[type="submit"]').click()
    })
  
    
    it('Credenciales correctas ', () => {
      // Realiza el inicio de sesión con credenciales válidas
      cy.get('input[name="identification"]').type('heyshaske@gmail.com')
      cy.get('input[name="password"]').type('HolaHelloHi123')
      cy.get('button[type="submit"]').click()
    })
     
  })