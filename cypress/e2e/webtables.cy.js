/// <reference types="cypress" />

describe('Handling WebTables',()=>{
    beforeEach(()=>{
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo')
        cy.get('button[type="submit"]').click();

        cy.getByClass('btn-close').click();
    })

    it('should be able to login',()=>{

        cy.getByClass('page-header').contains('Dashboard')

    })
    it('Handling product table',()=>{
        cy.getByClass('parent').contains('Customers').click()
        cy.get('a[href*="route=customer"]').eq(0).click()

        cy.getByClass('card').contains('tr','demo234566@gmail.com').then(tableRow =>{

            cy.log(tableRow)
            cy.wrap(tableRow).should('contain','20/07/2023')
            cy.wrap(tableRow).find('a[aria-label="Edit"]').click()
        })
    })
it('Check number of Rows & Columns',()=>{
    cy.getByClass('parent').contains('Customers').click()
    cy.get('a[href*="route=customer"]').eq(0).click()
    cy.getByClass('table > tbody > tr').its('length').should('eq',10);
    cy.getByClass('table > tbody > tr').should('have.length',10)
    cy.getById('form-customer').contains('Showing').then(el=> {
        const str = el.text();
        console.log(`${str} ${str.length}`);
        window.localStorage.setItem('pages',`${str} ${str.length}`);
        const index = str.indexOf('(')
        const index2 = str.indexOf('Pages',index+1)
        const pages = str.substring(index+1, index2-1)
        console.log(pages);
        expect(pages).to.eq('1673')
    })
})

})