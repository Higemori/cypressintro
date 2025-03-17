Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    });
  }
  
  return originalFn(element, text, options);
});

Cypress.Commands.add('register', (page, name, lastname, email, password, passwordRepeat) => {
  page.typeName(name)
    .typeLastName(lastname)
    .typeEmail(email)
    .typePassword(password)
    .reTypePassword(passwordRepeat)
    .register();
});

Cypress.Commands.add('login', (page, email, password) => {
  page.typeEmail(email)
    .typePassword(password)
    .reTypePassword(password)
    .login();
});

Cypress.Commands.add('hasRedBorder', {
  prevSubject: 'optional'
}, (subject) => { 
  if (subject) {
    cy.wrap(subject).should('have.css', 'border-color', 'rgb(220, 53, 69)');
  }
});

Cypress.Commands.add('isVisible', (items) => {
  items.each(($item) => {
    cy.wrap($item).should('be.visible');
  })
});