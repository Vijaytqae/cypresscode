

describe('verify the types of login methods by using saucedemo', () => {

  before("before all",() => {cy.log("before all or before 1st it block")

  })

  beforeEach("before each test",() => {cy.visit('/v1/index.html')

  })

  afterEach("after each test",() => {cy.log("test excution is completed")

  })

  after("after all",() => {cy.log("after all of after last it block")
    
  })

  it('Verify the logo of swag lab', () => {
    
    cy.get('div[class="login_logo"]').should('be.visible')
  })

  it('verify the image of Swag lab', () => {

    //cy.visit('/v1/index.html')
    cy.get('img[class="bot_column"]').should('be.visible')
    //cy.log("test excution is completed")

  })

  it('verify the login to saucelab with valid credential', () => {
    //cy.visit('/v1/index.html')
    cy.get('input[id="user-name"]').type("standard_user")
    cy.get('input[id="password"]').type('secret_sauce')
    cy.get('input[id="login-button"]').click()
    //cy.log("test excution is completed")

  })
  it('verify the login to saucelab with locked_out_user', () => {
    //cy.visit('/v1/index.html')
    cy.get('input[id="user-name"]').type("locked_out_user")
    cy.get('input[placeholder="Password"]').type('secret_sauce')
    cy.get('input[id="login-button"]').click()
    cy.get('h3[data-test="error"]').should('be.visible')
    //cy.log("test excution is completed")

  })

  it('verify the login to saucelab with problem_user', () => {
    //cy.visit('/v1/index.html')
    cy.get('input[placeholder="Username"]').type("problem_user")
    cy.get('input[placeholder="Password"]').type('secret_sauce')
    cy.get('input[id="login-button"]').click()
    //cy.log("test excution is completed")

  })
  it('verify the login to saucelab with performance_glitch_user', () => {
    //cy.visit('/v1/index.html')
    cy.get('input[placeholder="Username"]').type("performance_glitch_user")
    cy.get('input[id="password"]').type('secret_sauce')
    cy.get('input[id="login-button"]').click()
    //cy.log("test excution is completed")

  })

})