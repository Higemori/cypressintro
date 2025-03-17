import LoginPage from '../../pages/LoginPage';
import '../../cypress/support/commands';

describe('sign up tests', { testIsolation: false }, () => {
    const dataRequired = 'Email required';
    const wrongData = 'Email is incorrect';

    before(() => {
        LoginPage.visitPage();
        LoginPage.signUp();
    });

    beforeEach(() => {
        LoginPage.clearSignUpEmail();
    });

    it('email is valid', () => {
        LoginPage.typeSignUpEmail('randomemail@main.com');
        LoginPage.signupEmail.next().should('not.exist');
    });

    it('email is empty', () => {
        LoginPage.signupEmail.focus();
        LoginPage.signupEmail.blur();
        LoginPage.invalidSignupEmail.should('have.text', dataRequired);
        LoginPage.signupEmail.hasRedBorder();
    });

    it('email doesnt have username', () => {
        LoginPage.typeSignUpEmail('@main.com');
        LoginPage.invalidSignupEmail.should('have.text', wrongData);
        LoginPage.signupEmail.hasRedBorder();
    });

    it('email doesnt have @', () => {
        LoginPage.typeSignUpEmail('randomemailmain.com');
        LoginPage.invalidSignupEmail.should('have.text', wrongData);
        LoginPage.signupEmail.hasRedBorder();
    });

    it('email doesnt have mail server', () => {
        LoginPage.typeSignUpEmail('randomemail@.com');
        LoginPage.invalidSignupEmail.should('have.text', wrongData);
        LoginPage.signupEmail.hasRedBorder();
    });

    it('email doesnt have domain', () => {
        LoginPage.typeSignUpEmail('randomemail@main.');
        LoginPage.invalidSignupEmail.should('have.text', wrongData);
        LoginPage.signupEmail.hasRedBorder();
    });

    it('email doesnt have dot', () => {
        LoginPage.typeSignUpEmail('randomemail@maincom');
        LoginPage.invalidSignupEmail.should('have.text', wrongData);
        LoginPage.signupEmail.hasRedBorder();
    });
});