import LoginPage from '../../pages/LoginPage';
import '../../cypress/support/commands';

describe('sign up tests', { testIsolation: false }, () => {
    const dataRequired = 'Name required';
    const wrongData = 'Name is invalid';
    const wrongDataSize = 'Name has to be from 2 to 20 characters long';

    before(() => {
        LoginPage.visitPage();
        LoginPage.signUp();
    });

    beforeEach(() => {
        LoginPage.clearSignUpName();
    });

    it('name has 2 character', () => {
        LoginPage.typeSignUpName('ab');
        LoginPage.signupName.next().should('not.exist');
    });

    it('name has 20 characters', () => {
        LoginPage.typeSignUpName('abcdeabcdeabcdeabcde');
        LoginPage.signupName.next().should('not.exist');
    });

    it('name is empty', () => {
        LoginPage.signupName.focus();
        LoginPage.signupName.blur();
        LoginPage.invalidSignupName.should('have.text', dataRequired);
        LoginPage.signupName.hasRedBorder();
    });

    it('name has 1 character', () => {
        LoginPage.typeSignUpName('a');
        LoginPage.invalidSignupName.should('have.text', wrongDataSize);
        LoginPage.signupName.hasRedBorder();
    });

    it('name has a number', () => {
        LoginPage.typeSignUpName('Abc2');
        LoginPage.invalidSignupName.should('have.text', wrongData);
        LoginPage.signupName.hasRedBorder();
    });

    it('name has a special symbol', () => {
        LoginPage.typeSignUpName('Abc!');
        LoginPage.invalidSignupName.should('have.text', wrongData);
        LoginPage.signupName.hasRedBorder();
    });

    it('name has a space', () => {
        LoginPage.typeSignUpName('Abc abc');
        LoginPage.invalidSignupName.should('have.text', wrongData);
        LoginPage.signupName.hasRedBorder();
    });

    it('name has 21 characters', () => {
        LoginPage.typeSignUpName('abcdeabcdeabcdeabcdea');
        LoginPage.invalidSignupName.should('have.text', wrongDataSize);
        LoginPage.signupName.hasRedBorder();
    });
});