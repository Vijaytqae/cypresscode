const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {

    defaultBrowser: "chrome",

  baseUrl:"https://opensource-demo.orangehrmlive.com",

  //specPattern:"cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

  //baseUrl:"https://www.saucedemo.com",

    video:true,

    //defaultCommandTimeout:20000, // by default 40000 milli seconds
    pageLoadTimeout:30000,       // by default 60000 milli seconds
    //viewportWidth: 390,      // by default laptap resolution 1920 X 1080
    //viewportHeight: 844,  // by default resolution of cypress 1000w X 660h 

    retries:{"openMode":3,"runMode":2},

    //"videosFolder" : "cypress/recordedvideos",
    //"screenshotsFolder": "cypress/pictures",
    env: {

        "username" : "Vijay",
        "password" : "Vijay@123"
       },

       watchForFileChanges : false,

    

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});
