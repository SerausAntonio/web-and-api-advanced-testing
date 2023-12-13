/// <reference types = "cypress"/>
describe('Alerts',()=>{

    it('Should verify JSalerts',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts') 
        cy.get("button[onclick='jsAlert()']").contains('Click for JS Alert').click();
      
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })
        cy.get('#result').invoke('attr','style').should('eq','color:green')
        cy.get('#result').should('have.text','You successfully clicked an alert');
    })

    it('should accept JSconfirm Alert',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
            return true;
        })
        cy.get('#result').should('have.text','You clicked: Ok');

    })
    it('should accept JSconfirm cancel Alert',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get('button[onclick="jsConfirm()"]').click();
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
            return false;
        })
        cy.getById('result').should('have.text','You clicked: Cancel');

    })
    it('should handle prompt alert',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win) =>{
            cy.stub(win,'prompt').returns('Welcome');

        })
        cy.get('button[onclick="jsPrompt()"]').click();
        cy.getById('result').should('have.text','You entered: Welcome');

    })
    it('should handle prompt alert',()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((win) =>{
            cy.stub(win,'prompt').returns('Welcome');
            return false;
        })
        cy.get("button[onclick='jsPrompt()']").click();
        cy.getById('result').should('have.text','You entered: null');

    })
})