describe('Add Employee', () => {
  const employeeList = [
    { firstname: "Vijay", lastname: "Kumar" },
    { firstname: "Thrija", lastname: "Nagu" },
    { firstname: "Raghu", lastname: "Ranga" },
    { firstname: "Arjun", lastname: "Shashi" }
  ];

  // Function to log into the application
  const login = () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    cy.get('input[placeholder="Username"]').type("Admin");
    cy.get('input[type="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
  };

  // Function to navigate to the Add Employee page
  const goToAddEmployeePage = () => {
    cy.contains("PIM").click();
    cy.contains("Add Employee").click();
  };

  // Function to fill employee details in the form
  const fillEmployeeForm = (firstName, lastName) => {
    cy.get('input[placeholder="First Name"]').type(firstName);
    cy.get('input[placeholder="Last Name"]').type(lastName);
  };

  // Function to generate a unique employee ID and submit the form
  const generateEmployeeIdAndSubmit = () => {
    cy.getRandomID().then((randomID) => {
      cy.get("div input[class='oxd-input oxd-input--active']").last().type(randomID)
    });
    cy.get('button[type="submit"]').click();
  };

  // Function to verify if the employee was successfully added
  const verifyEmployeeAdded = (firstName, lastName) => {
    cy.contains("Successfully Saved").should("be.visible");
    cy.url().should("include", 'viewPersonalDetails');
    cy.contains(firstName).should("be.visible");
    cy.contains(lastName).should("be.visible");
  };

  employeeList.forEach((emp) => {
    it(`should add employee ${emp.firstname} ${emp.lastname}`, () => {
      login();
      goToAddEmployeePage();
      fillEmployeeForm(emp.firstname, emp.lastname);
      generateEmployeeIdAndSubmit();
      verifyEmployeeAdded(emp.firstname, emp.lastname);
      cy.contains("Add Employee").click(); // Reset the form for the next iteration
    });
  });
});

