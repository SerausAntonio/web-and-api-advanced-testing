describe('HTTP - Request', () => {

    it('GET - Request', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').as('resp')
        cy.get('@resp').then(response => {

            //  console.log(JSON.stringify(response.body.title));
            window.localStorage.setItem('title', JSON.stringify(response.body.title))
        })
    })

    it('GET - List all Requests', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').as('resp')
        cy.get('@resp').then(response => {

            console.log(JSON.stringify(response.body.length));
            console.log(JSON.stringify(response.body[0].userId))
            //  window.localStorage.setItem('title',JSON.stringify(response.body.title))
        })
    })
    it('POST - Request', () => {

        cy.request({

            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                title: 'foo',
                body: 'bar',
                userId: 1,

            }
        }).as('resp')

        cy.get('@resp').then(response => {
            expect(response.status).to.eq(201)
            expect(response.statusText).to.eq('Created')
        })

    })

    it('POST - Request with json file', () => {

        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', { fixture: 'postdata.json' }).as('resp')

        cy.get('@resp').then(response => {
            console.log(JSON.stringify(response.body))
            expect(response.status).to.eq(201)
            expect(response.statusText).to.eq('Created')
        })
    })

    it('should handle POST - requests', () => {

        cy.request('POST', 'http://restapi.adequateshop.com/api/Tourist', { tourist_name: "Mike", tourist_email: "acb123@hotmail.com", tourist_location: "Amsterdam" }).as('resp')

        cy.get('@resp').then(response => {

            console.log(JSON.stringify(response.body));
        })
    })
    it.only('should handle POST - requests with fixture file', () => {
        cy.fixture('tourist').as('create_test')
        cy.request({
            method: 'POST',
            url: 'http://restapi.adequateshop.com/api/Tourist',
            body: '@create_test',
            headers: {
                //'Authorization': this.token,
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
    })
})