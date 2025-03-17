import LoginPage from '../../pages/LoginPage';
import '../../cypress/support/commands';

describe('sign up tests', { testIsolation: false }, () => {
    const dataRequired = 'Password required';
    const wrongData = 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter';

    before(() => {
        LoginPage.visitPage();
        LoginPage.signUp();
    });

    beforeEach(() => {
        LoginPage.clearSignUpPassword();
    });

    it('signupPassword has 8 symbols and valid', () => {
        LoginPage.typeSignUpPassword('Abcdabc1', {sensitive: true});
        LoginPage.signupPassword.next().should('not.exist');
    });

    it('signupPassword has 15 symbols and valid', () => {
        LoginPage.typeSignUpPassword('Abcdabcaabcdab1', {sensitive: true});
        LoginPage.signupPassword.next().should('not.exist');
    });

    it('signupPassword is empty', () => {
        LoginPage.signupPassword.focus();
        LoginPage.signupPassword.blur();
        LoginPage.invalidSignupPassword.should('have.text', dataRequired);
        LoginPage.signupPassword.hasRedBorder();
    });

    it('signupPassword has 7 symbols', () => {
        LoginPage.typeSignUpPassword('Abcdab1', {sensitive: true});
        LoginPage.invalidSignupPassword.should('have.text', wrongData);
        LoginPage.signupPassword.hasRedBorder();
    });

    it('signupPassword doesnt have a number', () => {
        LoginPage.typeSignUpPassword('Abcdabcd', {sensitive: true});
        LoginPage.invalidSignupPassword.should('have.text', wrongData);
        LoginPage.signupPassword.hasRedBorder();
    });

    it('signupPassword doesnt have a capital letter', () => {
        LoginPage.typeSignUpPassword('abcdabc1', {sensitive: true});
        LoginPage.invalidSignupPassword.should('have.text', wrongData);
        LoginPage.signupPassword.hasRedBorder();
    });

    it('signupPassword doesnt have a small letter', () => {
        LoginPage.typeSignUpPassword('ABCDABC1', {sensitive: true});
        LoginPage.invalidSignupPassword.should('have.text', wrongData);
        LoginPage.signupPassword.hasRedBorder();
    });

    it('signupPassword has 16 symbols', () => {
        LoginPage.typeSignUpPassword('Abcdabcdabcdabc1', {sensitive: true});
        LoginPage.invalidSignupPassword.should('have.text', wrongData);
        LoginPage.signupPassword.hasRedBorder();
    });
});