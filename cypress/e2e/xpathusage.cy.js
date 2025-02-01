describe('verify the login functonalities',() => {

    it('verify the login with valid credentials',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@placeholder="Username"]').type("Admin")
        cy.xpath('//input[@type="password"]').type("admin123")
        cy.xpath('//button[@type="submit"]').click()
    })

})