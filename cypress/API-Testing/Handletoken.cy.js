///<reference types='cypress'/>
describe('Handling token',()=>{
  
    before(function(){
           cy.request({
                method:'POST',
                url: 'https://simple-books-api.glitch.me/api-clients',
                body: {

                    "clientName": "Test",
                    "clientEmail": Math.random().toString(5).substring(2)+"@gmail.com"
                }

            }).as('resp')
            cy.get('@resp').then(response =>{
                console.log (JSON.stringify(response.body.accessToken))
                let token = response.body.accessToken;
                window.localStorage.setItem('token',response.body.accessToken)
            })

    })


 it('Should create a new order',()=>{
        cy.request({
            method: 'POST',
            url: 'https://simple-books-api.glitch.me/orders',
              
              headers:{
                    "Content-Type": "application/json",
                    "Authorization": window.localStorage.getItem('token')
                },
              body: {
                    "bookId": 1,
                    "customerName": "xyzabc"
                }
            }).as('resp')

            cy.get('@resp').then((response)=>{

                console.log(response)
                expect(response.status).equal(201)
                expect(response.body.created).to.eq(true);
            })


        })


})










