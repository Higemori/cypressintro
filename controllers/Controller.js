
class Controller {
    isVisible ( items ) {
        items.each(($item) => {
            cy.wrap($item).should('be.visible');
        });
    }
}

export default new Controller;