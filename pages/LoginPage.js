import jsonData from '../env.json';

class LoginPage {
    getSocialsLinks() {
        return cy.get('.socials_link');
    }

    getNavigationButtons() {
        return cy.get('.header_nav').children();
    }

    getSigninButtons () {
        return cy.get('.header_right').children();
    }

    getSignUpButton () {
        return cy.contains('button', 'Sign up');
    }

    getContacts () {
        return cy.get('.contacts_link');
    }

    visit() {
        cy.visit(jsonData.loginPage);
    }
}

export default new LoginPage();