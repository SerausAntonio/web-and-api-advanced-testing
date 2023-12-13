describe('File Upload',()=>{

    it('Should upload single file',()=>{
        cy.visit('http://the-internet.herokuapp.com/upload')
        cy.getById('file-upload').selectFile("cypress/fixtures/bestand.json")
       // cy.get('#file-upload').attachFile("bestand.json")
        cy.getById('file-submit').click();
        cy.getByClass('example').contains('File Uploaded!')
        cy.getById('uploaded-files').should('contain','bestand.json')

    })
    it.only('Should upload multiple files',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.getById('filesToUpload').selectFile("cypress/fixtures/bestand.json","cypress/fixtures/example.json")
        // cy.get('#file-upload').attachFile("bestand.json")
         cy.getById('file-submit').click();
         cy.getByClass('example').contains('File Uploaded!')

    })

    it('File upload rename',()=>{



    })

})