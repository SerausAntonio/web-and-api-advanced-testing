// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('checkBrokenLinks', () => {


    cy.get('a').each((link) => {
       cy.request(link.prop('href')).then((response) => {
         expect(response.status).to.eq(200);
       });
    })
 })  
 Cypress.Commands.add('getByClass', (locator) => {
    return cy.get(`.${locator}`);
 }) 
 Cypress.Commands.add('getById', (locator) => {
  return cy.get(`#${locator}`);
}) 
 Cypress.Commands.add('checkBrokenImages', () => {
   //cy.get('#contcont').within(() => {
   cy.get('img').each((img) =>{
       cy.request(img.prop('src')).then((response) => {
           expect(response.status).to.eq(200);
         });
       
  // })
})

 })