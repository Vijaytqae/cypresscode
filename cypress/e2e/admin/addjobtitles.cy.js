
import data from"../../fixtures/logincreds.json"
import jobtitles from"../../fixtures/admindata/jobtitle.json"
//import { isTextNode } from "xpath"
import dashboard from "../../pageobjects/dashboard.po"


describe('verify the add job titles functionalities', () => {

  //const creds = ["Admin","admin123"]
  //const jobtitledata = {

    //jobtitle : "SDET I",
    //jobdescription : "Automation testing"
  //}

 const menuitems = {

    menu1 : "Admin",
    menu2 : "PIM",
    menu3 : "Leave",
    menu4 : "Time",
    menu5 : "Recruitment",
    menu6 : "My Info",
    menu7 : "Performance",
    menu8 : "Dashboard",
    menu9 : "Directory",
    menu10 : "Maintenance",
    menu11 : "Claim" 

}
const jobtitle = ["SDET IV", "FrontEndDeveloper","Scrummaster","BA","PO"]
jobtitle.forEach( jobtitle => {
  if(Cypress.browser.name ==='chrome'){

  it('verify the job titles with valid credentials',() => {
   cy.login(data.username,data.password)

   
  //  cy.contains("Admin").should(be.visible)
  //  cy.contains("PIM").should(be.visible)  // instead these 2 lines we can write like menu1,menu2..shown in above
  for(let modulename in menuitems){
    cy.contains(menuitems[modulename]).should("be.visible")
  }
  // cy.visit('/web/index.php/auth/login')
   //cy.get('input[name="username"]').type("Admin")
   //cy.get('input[name="username"]').type(data.username)
   //cy.get('input[name="password"]').type(data.password)
   //cy.get('button[type="submit"]').click()
//cy.get('a[href="/web/index.php/dashboard/index"]').should("be.visible")
    ///cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
    cy.get(dashboard.pimMenu()).click()
    
    cy.addjobtitle( jobtitles.jobtitle,jobtitles.jobdescription)

  })
  }
});
})