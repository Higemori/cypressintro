import LoginPage from '../pages/LoginPage';
import jsonData from '../env.json';
import Controller from '../controllers/controller';

describe('All buttons should be visible', () => {
    beforeEach(() => {
        LoginPage.visitPage();
    });

    it('socials buttons should be visible', () => {
        Controller.isVisible(LoginPage.socialsLinks());
    });

    it('navigation buttons should be visible', () => {
        Controller.isVisible(LoginPage.navigationButtons());
    });

    it('sign in buttons should be visible', () => {
        Controller.isVisible(LoginPage.signinButtons());
    });

    it('sign up button should be visible', () => {
        Controller.isVisible(LoginPage.signUpButton());
    });

    it('contact links should be visible', () => {
        Controller.isVisible(LoginPage.contacts());
    });
});