//Calling the inquirer module
const inquirer = require('inquirer');
//Calling the jest module
const jest = require('jest');
//Calling the fs module
const fs = require('fs');
//Calling the employee js
const employee = require('./lib/employee')
//Calling the engineer js
const engineer = require('./lib/engineer')
//Calling the intern js
const intern = require('./lib/intern')
//Calling the manager js
const manager = require('./lib/manager')

// function to initialize program
function init() {
    //Prompt questions
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter the manager name!',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'Enter the manager employee ID!',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter the manager email address!',
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Enter the manager office phone number!',
        },
        {
            type: 'list',
            name: 'role',
            message: 'Choose the role of the next team member!',
            choices: ['Engineer', 'Intern'],
        }
    ]).then((data) => {
        console.log('\nUser input:');
        console.log(JSON.stringify(data, null, '  '));

       //writeFileAsync('README.md', generateMarkdown((data)))
       
    })
    .then(() => {
            //Function to run through the role choose
            console.log(data.role)
            if (data.role === 'Engineer') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'engineerName',
                        message: 'Enter the engineer name!',
                    },
                    {
                        type: 'input',
                        name: 'engineerId',
                        message: 'Enter the engineer ID!',
                    },
                    {
                        type: 'input',
                        name: 'engineerEmail',
                        message: 'Enter the engineer email!',
                    },
                    {
                        type: 'input',
                        name: 'engineerGitHub',
                        message: 'Enter the engineer GitHub username!',
                    },
                    {
                        type: 'list',
                        name: 'enterIntern',
                        message: 'Would you like to add an intern?',
                        choices: ['Yes', 'No'],
                    },
    
                ])
            }
            else  {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'internName',
                        message: 'Enter the Intern name!',
                    },
                    {
                        type: 'input',
                        name: 'internId',
                        message: 'Enter the intern ID!',
                    },
                    {
                        type: 'input',
                        name: 'internEmail',
                        message: 'Enter the intern email!',
                    },
                    {
                        type: 'input',
                        name: 'internSchool',
                        message: 'Enter the intern school name!',
                    },
                    {
                        type: 'list',
                        name: 'moreTeam',
                        message: 'Would you like to add more team member?',
                        choices: ['Yes', 'No'],
                    },
    
                ])
            }
        })
    .then((data) => {
        console.log('\nUser input:');
        console.log(JSON.stringify(data, null, '  '));

       //writeFileAsync('README.md', generateMarkdown((data)))
       
    });
};
//Calling the init function
init();

