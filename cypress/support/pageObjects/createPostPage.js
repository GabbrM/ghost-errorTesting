class CreatePostPage {
  getTitleTextarea() {
    return cy.get('textarea[placeholder="Post title"]');
  }

  getSaveButton() {
    return cy.get('button.gh-publish-trigger');
  }
  getContentTextarea() {
    return cy.get('.koenig-editor__editor', { timeout: 10000 });
  }

  getPublishButton() {
    return cy.get('button.gh-publish-trigger');
  }

  typeContent(content) {
    this.getContentTextarea().type(content);
  }

  createPost(title, content) {
    this.getTitleTextarea().type(title);
    this.typeContent(content);
    this.getSaveButton().click();
  }
}

export default new CreatePostPage();
