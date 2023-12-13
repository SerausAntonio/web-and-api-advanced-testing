///<reference types="cypress" />
describe('Query - Parameters',()=>{
   
    it('should pass query parameters',()=>{

        cy.request('GET','/api/users?page=2').as('resp')
    
        cy.get('@resp').then((response) =>{
            console.log(JSON.stringify(response));
            expect(response.status).to.eq(200);
            expect(response.body.data).has.length(6)
            expect(response.body.data[0]).has.property('first_name','Michael')
           
        });
    })
    it('should be able to create client',()=>{
         cy.request({
                method: 'POST',
                url: 'https://simple-books-api.glitch.me/api-clients',
                body: {
                        "clientName": "Peter",
                        "clientEmail": "ppp33334@gmail.com"
                     
                }
             
         }).as('resp');
           cy.get('@resp').then((response)=>{
                console.log(JSON.stringify(response))
                expect(response.status).to.eq(201)
                console.log(response.body.accessToken)
                window.localStorage.setItem('token',response.body.accessToken)
            })
           

    })
    
   
    it('Passing Query parameters',()=>{
            cy.request({
                method: 'GET',
                url: 'https://simple-books-api.glitch.me/'
            }).as('resp')
            cy.get('@resp').then((response)=>{
                console.log(JSON.stringify(response.body.message));
                expect(response.status).to.eq(200)
                expect(response.body.message).to.eq('Welcome to the Simple Books API.')
                
            })
        })

})


