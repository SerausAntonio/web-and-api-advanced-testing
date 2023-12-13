///<reference types="cypress"/>
describe('Parsing JSON', () => {
    it('should get a list off All - Products', () => {
        cy.request({
            method: 'GET',
            url: 'https://fakestoreapi.com/products'
        }).as('resp')

        cy.get('@resp').then((response) => {
            console.log(response.body.length);
            console.log(response.body[0].title);
            console.log(response.body[0].description);
            expect(response.body[0].rating.rate).to.eq(3.9);
           
        })

    })
    it('should perform Basic-Authentication Postman',()=>{

        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                    user: "postman",
                    pass: "password"
                } 
        }).as('resp')
        cy.get('@resp').then(response => {
            console.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200);
            expect(response.body.authenticated).to.eq(true);
        })
    })
    it('should perform Digist - Authentication Postman',()=>{

        cy.request({
            method: 'GET',
            url: 'https://postman-echo.com/basic-auth',
            auth: {
                    user: "postman",
                    pass: "password",
                    method: "degest"
                } 
        }).as('resp')
        cy.get('@resp').then(response => {
            console.log(JSON.stringify(response.body))
            expect(response.status).to.eq(200);
            expect(response.body.authenticated).to.eq(true);
        })
    })
})