/// <reference types="cypress"/>

describe('Mouse events',()=>{
    beforeEach(()=>{
        cy.visit('http://the-internet.herokuapp.com/hovers')
    })
    it('should handle Mouse Hover',()=>{
        cy.getByClass('example').contains('Hover');
        cy.getByClass('figure').eq(0).trigger('mouseover');
        cy.getByClass('figcaption').contains('name: user1')

    })
    it('should handle Right Click',()=>{
        cy.getByClass('example').contains('Hover');
        cy.getByClass('figure').eq(0).trigger('mouseover');
        cy.getByClass('figcaption').contains('name: user1')

    })
})