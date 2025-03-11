import LoginPage from '../pages/LoginPage';
import jsonData from '../env.json';
import Controller from '../controllers/controller';

describe('All buttons should be visible', () => {
    beforeEach(() => {
        LoginPage.visit();
    });

    it('socials buttons should be visible', () => {
        Controller.isVisible(LoginPage.getSocialsLinks());
    });

    it('navigation buttons should be visible', () => {
        Controller.isVisible(LoginPage.getNavigationButtons());
    });

    it('sign in buttons should be visible', () => {
        Controller.isVisible(LoginPage.getSigninButtons());
    });

    it('sign up button should be visible', () => {
        Controller.isVisible(LoginPage.getSignUpButton());
    });

    it('contact links should be visible', () => {
        Controller.isVisible(LoginPage.getContacts());
    });
});