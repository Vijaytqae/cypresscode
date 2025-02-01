describe('verify the login functionalities', () => {

  

    it.only('verify the login with valid Username and Password', () => {

    
      switch(Cypress.browser.name) {

        case "chrome": {
          cy.log("The browser is chrome browser")
          cy.viewport("iphone-6")
  
        }
          break;
  
        case "firefox": {
          cy.log("the browser is firefox browser")
          cy.viewport("macbook-13")
  
        }
          break;
  
        case "edge": {
          cy.log("the browser is Edge browser")
          cy.viewport("samsung-s10")
  
        }
          break;
      }
      //cy.viewport("macbook-11","portrait")
      cy.visit('https://the-internet.herokuapp.com/login')
      // cy.wait(20000) 
      cy.contains('Login Page').should('be.visible')
      cy.get('input[name="username"]').type(Cypress.env("username"))
      cy.get('input[name="password"]').type(Cypress.env("password"))
      cy.get('button[type="submit"]').click()
      //cy.get('div[class="flash success"]').should("be.visible")
      //cy.contains('You logged into a secure area!').should('be.visible')
      //cy.get('a[href="/logout"]').click()
      //cy.get('div[class="flash success"]')
  
    })

    it('verify the login with invalid Username and  Valid Password', () => {
      cy.viewport("iphone-6","landscape")
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type('Vijay')
        cy.get('input[name="password"]').type('SuperSecretPassword!')
        cy.get('button[type="submit"]').click()
        cy.get('div[id="flash"]').should("be.visible")
      })

    

      it('verify the login with valid Username and  invalid Password', () => {
        cy.viewport(390,844)
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type('tomsmith')
        cy.get('input[name="password"]').type('Super')
        cy.get('button[type="submit"]').click()
        cy.get('div[data-alert]').should("be.visible")

      })

      it('verify the login with in-valid Username and  in-valid Password', () => {
        cy.viewport(390,844)
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type('Nagarjun')
        cy.get('input[name="password"]').type('Yadav')
        cy.get('button[type="submit"]').click()
        cy.get('div[id="flash"]').should("be.visible")

      })

      it('verify the login with Blank Username and  in-valid Password', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type(" ")
        cy.get('input[name="password"]').type('Yadav')
        cy.get('button[type="submit"]').click()
        cy.get('div[id="flash"]').should("be.visible")

      })

      it('verify the login with Blank Username and  Valid Password', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type(' ')
        cy.get('input[name="password"]').type('SuperSecretPassword!')
        cy.get('button[type="submit"]').click()
        cy.get('div[id="flash"]').should("be.visible")

      })

      it('verify the login with valid Username and Blank Password', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type('tomsmith')
        cy.get('input[name="password"]').type(' ')
        cy.get('button[type="submit"]').click()
        cy.get('div[data-alert]').should("be.visible")

      })

      it('verify the login with in-valid Username and  Blank Password', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type('Yadav')
        cy.get('input[name="password"]').type(" ")
        cy.get('button[type="submit"]').click()
        cy.get('div[id="flash"]').should("be.visible")

      })

      it('verify the login with Blank Username and  Blank Password', () => {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.get('input[name="username"]').type(' ')
        cy.get('input[name="password"]').type(" ")
        cy.get('button[type="submit"]').click()
        cy.get('div[id="flash"]').should("be.visible")

      })
})
