const Manager = require("./starter/lib/Manager");
const Engineer = require("./starter/lib/Engineer");
const Intern = require("./starter/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const render = require("./src/page-template.js");

const teamMembers = [];

// Prompt user to enter information about the team manager
function promptManager() {
  console.log("Please enter information for the team manager:");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter email address:",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter office number:",
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      teamMembers.push(manager);
      menu();
    });
}

// Prompt user to choose between adding an engineer, adding an intern, or finishing team building
function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "What would you like to do?",
        choices: ["Add an engineer", "Add an intern", "Finish building team"],
      },
    ])
    .then((data) => {
      switch (data.option) {
        case "Add an engineer":
          promptEngineer();
          break;
        case "Add an intern":
          promptIntern();
          break;
        default:
          generateTeam();
          break;
      }
    });
}

// Prompt user to enter information about an engineer
function promptEngineer() {
  console.log("Please enter information for an engineer:");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter email address:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter GitHub username:",
      },
    ])
    .then((data) => {
      const engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      teamMembers.push(engineer);
      menu();
    });
}

// Prompt user to enter information about an intern
function promptIntern() {
  console.log("Please enter information for an intern:");
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee ID:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter email address:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter school name:",
      },
    ])
    .then(data) ; {
      const intern = new Intern(data.name, data.id, data.email, data.school);
      teamMembers.push(intern)}
}