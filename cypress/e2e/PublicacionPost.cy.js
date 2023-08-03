describe('Crear nuevo post en Ghost', () => {  
    beforeEach(() => {  
      cy.visit('http://localhost:2368/ghost/#/signin')  
    })  
  
   
    it('Debe crear un nuevo post correctamente', () => {  
  
      //Inicio de sesion
      cy.get('input[name="identification"]').type('heyshaske@gmail.com')  
      cy.get('input[name="password"]').type('HolaHelloHi123')  
      cy.get('button[type="submit"]').click()  
  
      // Dashboard
      cy.url().should('include', '/ghost/#/dashboard')  
  
      // Crear Post
      cy.get('a[href*="/editor/"]').click()  
  
      // Texto del post
      //cy.get('textarea[placeholder="Post title"]').type('UPCinos en guerra')  
     
      cy.fixture('post-content.txt').then(contenido=>{
        cy.get('textarea[placeholder="Post title"]').type('UPC Innova');
        cy.get('.__mobiledoc-editor').type(contenido);
      })
  
     // cy.get('.__mobiledoc-editor').type('text.txt')  
  
      // Publicacion del post
       cy.contains('Publish').click()  
       cy.contains('Continue, final review →').click()  
       cy.contains(' Publish post, right now').click()
  
       cy.visit('http://localhost:2368/ghost/#/dashboard')
  
    })  
  })