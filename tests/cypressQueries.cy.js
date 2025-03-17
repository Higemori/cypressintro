import LoginPage from '../pages/LoginPage';

describe('All buttons should be visible', () => {
    beforeEach(() => {
        LoginPage.visitPage();
    });

    it('socials buttons should be visible', () => {
        cy.isVisible(LoginPage.socialsLinks);
    });

    it('navigation buttons should be visible', () => {
        cy.isVisible(LoginPage.navigationButtons);
    });

    it('sign in buttons should be visible', () => {
        cy.isVisible(LoginPage.signInButtons);
    });

    it('sign up button should be visible', () => {
        cy.isVisible(LoginPage.signUpButton);
    });

    it('contact links should be visible', () => {
        cy.isVisible(LoginPage.contacts);
    });
});