describe('Prueba Completa Publicación de página', () => {  
    beforeEach(() => {  
      cy.visit('http://localhost:2368/ghost/#/dashboard')  
    })  
  
  
    it('Debe crear un nuevo post correctamente', () => {  
  
  
      //Inicio de sesion

      cy.get('input[name="identification"]').type('heyshaske@gmail.com')  
      cy.get('input[name="password"]').type('HolaHelloHi123')  
      cy.get('button[type="submit"]').click()  
  
  
      // Dashboard
  
      cy.url().should('include', '/ghost/#/dashboard')  
  
      // Seccion Post
    
      cy.get('a[href*="/editor/"]').click()  
      cy.get('textarea[placeholder="Post title"]').type('Titulo Nuevo.')
      cy.get('.__mobiledoc-editor').type('Lorem ipsum dolor sit amet consectetur adipiscing elit ante, accumsan nisl vulputate aptent eget suspendisse senectus consequat, dignissim dictumst habitasse nec habitant luctus convallis. Augue fusce eu nullam quam vitae taciti montes, ridiculus mus cubilia nunc urna imperdiet, cursus laoreet aliquam dui nulla class. Fermentum fringilla nibh massa, cras fames.')
      cy.contains('Publish').click()  
      cy.contains('Continue, final review →').click()  
      cy.contains(' Publish post, right now').click()  
      cy.contains('Back to editor').click()
      cy.contains('Posts').click()
    
    
      // Seccion de creación de página
  
      cy.contains('Pages').click()
      cy.contains('New page').click()
      cy.get('textarea[placeholder="Page title"]').type('Pagina Nueva.')
      cy.get('.__mobiledoc-editor').type('Lorem ipsum dolor sit amet consectetur adipiscing elit ante, accumsan nisl vulputate aptent eget suspendisse senectus consequat, dignissim dictumst habitasse nec habitant luctus convallis. Augue fusce eu nullam quam vitae taciti montes, ridiculus mus cubilia nunc urna imperdiet, cursus laoreet aliquam dui nulla class. Fermentum fringilla nibh massa, cras fames.')
      cy.contains('Publish').click()
      cy.contains('Continue, final review →').click()  
      cy.contains(' Publish page, right now').click()  
      cy.contains('Pagina Nueva.').click()
      cy.contains('Back to editor').click()
      cy.contains('Pages').click({ force: true })
  
  
      // Sección de tags
  
  
      cy.contains('Tags').click({ force: true })
      cy.contains('New tag').click({ force: true })
      cy.get('input[name="name"]').type('Lorem Ipsum', { force: true });
  
  
      // cy.get('input[name="accent-color"]').type('ff0000') Hay más de un elemento para cambiar color. Esto no permite seleccionarlo. Alguna idea?
  
      cy.get('textarea[name="description"]').type('Lorem ipsum dolor sit amet consectetur, adipiscing elit posuere cursus, porta sagittis lobortis condimentum. Suscipit suspendisse tempus rutrum himenaeos fames est netus dis fusce sociis, montes feugiat aptent auctor non leo iaculis vel curae, etiam luctus aliquam per pharetra proin nulla vitae ultricies. Aliquet risus cras tincidunt libero, tortor habitant.')
      cy.contains('Save').click()
  
  
    })  
  })