class loginPage{

    logo = 'img[alt="company-branding"]'
    // usernameInput = 'input[name="username"]'

    // passwordInput(){

    // return 'input[type="password"]'
    // }

    entercred(value){

        return "input[name='"+value+"']";   
    }

    loginButton(){

        return 'button[type="submit"]'

    }

    loginErrorMessage(){

        return 'Invalid credentials'
    }

    loginwithcreds(username , password){
        //cy.get(this.usernameInput).type(username)
        cy.get(this.entercred("username")).type(username)
        //cy.get(this.passwordInput()).type(password)
        cy.get(this.entercred("password")).type(password)
        cy.get(this.loginButton()).click()
    }
}

const login = new loginPage()

export default login