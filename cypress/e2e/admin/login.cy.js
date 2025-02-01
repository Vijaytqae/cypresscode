import logindata from "../../fixtures/logincreds.json"

import login from "../../pageobjects/login.po.js"

describe('verify the login functionalities', () => {

  var username = "Admin"
  var password = "admin123"

  it('verify the logo', () => {

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


    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //cy.get('img[alt="company-branding"]').should('be.visible')
    cy.get(login.logo).should('be.visible')

  })

  it('verify the login with valid credential', () => {

    //cy.login("admin", "admin123")
    cy.login(username, password)
    cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    //cy.visit("/web/index.php/auth/login")
    // cy.get('input[name="username"]').type('Admin')
    //cy.get('input[name="username"]').type(logindata.username)
    //cy.get('input[name="password"]').type('admin123')
    //cy.get('input[name="password"]').type(logindata.password)
    //cy.get('button[type="submit"]').click()
    //cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    //cy.contains('Time at Work').should('be.visible')
    //cy.get('a[href="/web/index.php/dashboard/index"]').should("be.visible")
  })

  it('verify the login with valid username and invalid password', () => {

   let wrongpassword = "admin1234"
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //cy.get('input[name="username"]').type("Admin")
    ///cy.get('input[name="username"] ').type(logindata.username)
    ////cy.get(login.usernameInput).type(logindata.username)
    //cy.get('input[name="password"]').type('admin1234')
    ///cy.get('input[name="password"]').type(logindata.wrongpassword)
    ////cy.get(login.passwordInput()).type(logindata.wrongpassword)
    ///cy.get('button[type="submit"]').click()
   //// cy.get(login.loginButton()).click()
    ///cy.contains(login.loginErrorMessage).should("be.visible")
    login.loginwithcreds(logindata.username , logindata.wrongpassword)
    cy.contains(login.loginErrorMessage()).should("be.visible")
    
  })

  it('verify the login with invalid username and valid password', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //cy.get('input[name="username"]').type("Adminnn")
    ///cy.get('input[name="username"]').type(logindata.wrongusername)
    ////cy.get(login.usernameInput).type(logindata.wrongusername)
    //cy.get('input[name="password"]').type('admin123')
    ///cy.get('input[name="password"]').type(logindata.password)
    ////cy.get(login.passwordInput()).type(logindata.password)
    ///cy.get('button[type="submit"]').click()
    ////cy.get(login.loginButton()).click()
    ///cy.contains(login.loginErrorMessage).should("be.visible")

    login.loginwithcreds(logindata.wrongusername,logindata.password)

    cy.contains(login.loginErrorMessage()).should("be.visible")
  })

  it('verify the login with invalid username and invalid password', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //cy.get('input[name="username"]').type("Adminnn")
    ///cy.get('input[name="username"]').type(logindata.wrongusername)
    ////cy.get(login.usernameInput).type(logindata.wrongusername)
    //cy.get('input[name="password"]').type('admin1234')
    ///cy.get('input[name="password"]').type(logindata.wrongpassword)
    ////cy.get(login.passwordInput()).type(logindata.wrongpassword)
    ///cy.get('button[type="submit"]').click()
    ////cy.get(login.loginButton()).click()
    ///cy.contains('Invalid credentials').should("be.visible")

   login.loginwithcreds(logindata.wrongusername , logindata.wrongpassword)

    cy.contains(login.loginErrorMessage()).should("be.visible")
  })

})
 