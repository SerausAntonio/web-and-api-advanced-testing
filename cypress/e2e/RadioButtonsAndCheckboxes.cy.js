/// <reference types = "cypress"/>
describe('Radio Buttons and checkboxes',()=>{

    it('should check radio button',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.visit('https://zoho.com/commerce/free-demo.html')
        cy.getById('zcf_address_country').select('Aruba')


    })


})