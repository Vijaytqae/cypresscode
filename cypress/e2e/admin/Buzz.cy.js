describe('Verify the Buzz module', () => {
  it('verify the buzzmodule in the orangehrm', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type("Admin")
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('a[href="/web/index.php/dashboard/index"]').should("be.visible")

    cy.get('[href="/web/index.php/buzz/viewBuzz"]').click()
    cy.get('textarea[style="height: 30px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;"]').type('how are you')
    cy.get('button[type="submit"]').click()

  })
})