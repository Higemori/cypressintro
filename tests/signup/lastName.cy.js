import LoginPage from '../../pages/LoginPage';
import '../../cypress/support/commands';

describe('last name field tests', { testIsolation: false }, () => {
    const dataRequired = 'Last name required';
    const wrongData = 'Last name is invalid';
    const wrongDataSize = 'Last name has to be from 2 to 20 characters long';

    before(() => {
        LoginPage.visitPage();
        LoginPage.signUp();
    });

    beforeEach(() => {
        LoginPage.clearSignUpLastName();
    });

    it('last name has 2 character', () => {
        LoginPage.typeSignUpLastName('ab');
        LoginPage.signupLastName.next().should('not.exist');
    });

    it('last name has 20 characters', () => {
        LoginPage.typeSignUpLastName('abcdeabcdeabcdeabcde');
        LoginPage.signupLastName.next().should('not.exist');
    });

    it('last name is empty', () => {
        LoginPage.signupLastName.focus();
        LoginPage.signupLastName.blur();
        LoginPage.invalidSignupLastName.should('have.text', dataRequired);
        LoginPage.signupLastName.hasRedBorder();
    });

    it('last name has 1 character', () => {
        LoginPage.typeSignUpLastName('a');
        LoginPage.invalidSignupLastName.should('have.text', wrongDataSize);
        LoginPage.signupLastName.hasRedBorder();
    });

    it('last name has a number', () => {
        LoginPage.typeSignUpLastName('Abc2');
        LoginPage.invalidSignupLastName.should('have.text', wrongData);
        LoginPage.signupLastName.hasRedBorder();
    });

    it('last name has a special symbol', () => {
        LoginPage.typeSignUpLastName('Abc!');
        LoginPage.invalidSignupLastName.should('have.text', wrongData);
        LoginPage.signupLastName.hasRedBorder();
    });

    it('last name has a space', () => {
        LoginPage.typeSignUpLastName('Abc abc');
        LoginPage.invalidSignupLastName.should('have.text', wrongData);
        LoginPage.signupLastName.hasRedBorder();
    });

    it('last name has 21 characters', () => {
        LoginPage.typeSignUpLastName('abcdeabcdeabcdeabcdea');
        LoginPage.invalidSignupLastName.should('have.text', wrongDataSize);
        LoginPage.signupLastName.hasRedBorder();
    });
});