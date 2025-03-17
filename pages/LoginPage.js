import jsonData from '../env.json';
import '../cypress/support/commands';

class LoginPage {
    get socialsLinks() {
        return cy.get('.socials_link');
    }

    get navigationButtons() {
        return cy.get('.header_nav').children();
    }

    get signInButtons () {
        return cy.get('.header_right').children();
    }

    get signUpButton () {
        return cy.contains('button', 'Sign up');
    }

    get contacts () {
        return cy.get('.contacts_link');
    }

    get signupName () {
        return cy.get('#signupName');
    }

    get invalidSignupName() {
        return cy.get('#signupName').next().find('p');
    }

    get signupLastName () {
        return cy.get('#signupLastName');
    }

    get invalidSignupLastName() {
        return cy.get('#signupLastName').next().find('p');
    }

    get signupEmail () {
        return cy.get('#signupEmail');
    }

    get invalidSignupEmail() {
        return cy.get('#signupEmail').next().find('p');
    }

    get signupPassword () {
        return cy.get('#signupPassword');
    }

    get invalidSignupPassword() {
        return cy.get('#signupPassword').next().find('p');
    }

    get signupRepeatPassword () {
        return cy.get('#signupRepeatPassword');
    }

    get invalidSignupRepeatPassword() {
        return cy.get('#signupRepeatPassword').next().find('p');
    }

    get registerButton () {
        return cy.contains('button', 'Register');
    }

    signUp () {
        this.signUpButton.click();
        return this;
    }

    typeSignUpName (name) {
        this.signupName.type(name);
        return this;
    }

    clearSignUpName () {
        this.signupName.clear();
        return this;
    }

    typeSignUpLastName (lastName) {
        this.signupLastName.type(lastName);
        return this;
    }

    clearSignUpLastName () {
        this.signupLastName.clear();
        return this;
    }

    typeSignUpEmail (email) {
        this.signupEmail.type(email);
        return this;
    }

    clearSignUpEmail () {
        this.signupEmail.clear();
        return this;
    }

    typeSignUpPassword (password) {
        this.signupPassword.type(password, { sensitive: true });
        return this;
    }

    clearSignUpPassword () {
        this.signupPassword.clear();
        return this;
    }

    typeSignUpRepeatPassword (password) {
        this.signupRepeatPassword.type(password, { sensitive: true });
        return this;
    }

    clearSignUpRepeatPassword () {
        this.signupRepeatPassword.clear();
        return this;
    }

    register () {
        this.registerButton.click();
    }

    visitPage () {
        cy.visit(jsonData.loginPage);
    }

    reloadPage () {
        cy.reload();
    }
}

export default new LoginPage();