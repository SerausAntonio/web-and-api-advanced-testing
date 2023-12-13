describe('Should detect broken images',()=>{

    it.only('verify broken images',()=>{
        cy.visit('http://the-internet.herokuapp.com/broken_images')

       // cy.checkBrokenImages();
        cy.get('body').within(() => {
            cy.get('img').each((img) =>{
                cy.request(img.prop('src')).then((response) => {
                    expect(response.status).to.eq(200);
                  });
                
            })
         })
         
    })
    it('should load page with target=blank attribute',()=>{
        cy.visit('http://the-internet.herokuapp.com/broken_images')

        cy.get('a').contains('Elemental Selenium').invoke('removeAttr','target').click();


    })

})