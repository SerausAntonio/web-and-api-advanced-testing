///<reference types="cypress"/>
describe('Bearer Auth', () => {

  it('Validate Bearer - Auth', () => {
    const token = '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'
    cy.request(
      {
        method: 'GET',
        url: 'https://github.com/user/repos',
        headers: {
          Authorization: 'Bearer ' + token
        }

      }
    ).then(response => {

      expect(response.status).to.eq(200)
    })


  })

  it('Validate API - key', () => {
    //go to weather report and generate a key
    // url: https//openweathermap.org
    cy.request({

      method: 'GET',
      url: 'api.openweathermap.org/data/2.5/forecast/daily?q=Delhi',
      qs: {
        appid: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' //API key and value
      }
    }).then(response => {

      expect(response).to.eq(200);
    })

  })

  it('Verify chaining request',()=>{

    cy.request({

      method: 'GET',
      url: 'https://gorest.co.in/public/v2/users',

      body: {

          name: 'Peter Parker',
          gender: 'male',
          email: Math.random().toString(5).toString(2)+"gmail.com",
          status: 'active'

      },
      headers: {
          Authorization: auth_token


      }
    }).then(response => {

      expect(response.status).to.eq(200);
      const userId = reponse.body.userid
      //update user name
      cy.request({
        method: 'PUT',
        url: `https://gorest.co.in/public/v2/users/${userId}`,

        body: {
          name: "Scott"
        },
        headers: {
          Authorization:auth_token
        }
      }).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq('Scott')
      })
    })


  })

})
