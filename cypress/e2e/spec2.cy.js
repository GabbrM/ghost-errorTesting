import LoginPage from '../support/pageObjects/loginPage';
import CreatePostPage from '../support/pageObjects/createPostPage';

describe('Create Post Spec', () => {
  before(() => {
    cy.visit('http://localhost:2368/ghost/#/site');
    LoginPage.login("heyshaske@gmail.com", "HolaHelloHi123");
  });

  it('should create and publish a new post', () => {
    cy.visit('http://localhost:2368/ghost/#/editor/post');
  
    const title = 'TItulo del psot';
    const content = 'contenido del post.'; 
  
    CreatePostPage.createPost(title, content);
    CreatePostPage.typeContent(content);
  
    CreatePostPage.getPublishButton().click();
  
   
    cy.url().should('exist');

    cy.contains('span', 'Continue, final review').click();
    cy.contains('span', 'Publish post, right now').click();
  });
});
