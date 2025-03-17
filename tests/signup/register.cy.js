import LoginPage from '../../pages/LoginPage';
import jsonData from '../../cypress/fixtures/urls.json';
import '../../cypress/support/commands';
import {faker} from '@faker-js/faker';

describe('sign up tests', { testIsolation: false }, () => {
    const dataRequired = 'Password required';
    const wrongData = 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter';

    before(() => {
        LoginPage.visitPage();
        LoginPage.signUp();
    });

    after(() => {
        cy.contains('a', ' Log out ').click();
    });

    it('register with valid data', () => {
        LoginPage.typeSignUpName('Bob');
        LoginPage.registerButton.should('have.attr', 'disabled');
        LoginPage.typeSignUpLastName('Bob');
        LoginPage.registerButton.should('have.attr', 'disabled');
        LoginPage.typeSignUpEmail(faker.internet.email());
        LoginPage.registerButton.should('have.attr', 'disabled');
        LoginPage.typeSignUpPassword('Abcdabc1', {sensitive: true});
        LoginPage.registerButton.should('have.attr', 'disabled');
        LoginPage.typeSignUpRepeatPassword('Abcdabc1', {sensitive: true});
        LoginPage.register();
        cy.url().should('eq', jsonData.garage);
    });
});