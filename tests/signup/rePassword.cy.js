import LoginPage from '../../pages/LoginPage';
import '../../cypress/support/commands';

describe('sign up tests', { testIsolation: false }, () => {
    const dataRequired = 'Re-enter password required';
    const wrongData = 'Passwords do not match';

    before(() => {
        LoginPage.visitPage();
        LoginPage.signUp();
    });

    beforeEach(() => {
        LoginPage.clearSignUpPassword();
        LoginPage.clearSignUpRepeatPassword();
    });

    it('passwords match', () => {
        LoginPage.typeSignUpPassword('Abcdabc1', {sensitive: true});
        LoginPage.typeSignUpRepeatPassword('Abcdabc1', {sensitive: true});
        LoginPage.signupPassword.next().should('not.exist');
        LoginPage.signupRepeatPassword.next().should('not.exist');
    });

    it('passwords do not match', () => {
        LoginPage.typeSignUpPassword('Abcdabc1', {sensitive: true});
        LoginPage.typeSignUpRepeatPassword('Abcdabc2', {sensitive: true});
        LoginPage.invalidSignupRepeatPassword.should('have.text', wrongData);
        LoginPage.signupRepeatPassword.hasRedBorder();
    });

    it('signupPassword is empty', () => {
        LoginPage.signupRepeatPassword.focus();
        LoginPage.signupRepeatPassword.blur();
        LoginPage.invalidSignupRepeatPassword.should('have.text', dataRequired);
        LoginPage.signupRepeatPassword.hasRedBorder();
    });
});