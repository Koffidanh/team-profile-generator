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
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Name = require('./lib/name');
const styleHtml = require('./lib/generatorHtml');

//
const teamMemberArray = [];

// function to initialize program
function init() {

    //Prompt questions
    inquirer.prompt([
        {
            type: 'input',
            name: 'teamName',
            message: 'Enter the team name!',
        },
        {
            type: 'confirm',
            name: 'teamMember',
            message: 'Would you like to add a team member?',
            choices: ['Yes', 'No'],
            default: true,
        }
    ]).then((answers) => {
        const teamName = answers.teamName;
        const teamMemberName = new Name(teamName)
        teamMemberArray.push(teamMemberName)
        if (answers.teamMember === true) {
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'role',
                    message: 'Choose the role of the next team member!',
                    choices: ['Manager', 'Engineer', 'Intern'],
                }
            ]).then((answers) => {
                if (answers.role === 'Manager') {
                    generateManager()
                }
                else if (answers.role === 'Engineer') {
                    generateEngineer()
                }
                else {
                    generateIntern()
                }
            })

        }
    })

}

//Push the data into the Array
//teamMember.push(answers)
//Push the data for answers.name and id , so into the teamMember
//If team role = manager then 
//Calling the init function

init();


//function to generate manager question
function generateManager() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Enter the manager name!',
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the manager ID!',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Enter manager email!',
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Enter manager office number!',
        },
    ]).then((answers) => {
        //

        const teamManagerName = answers.managerName;
        const teamManagerId = answers.managerId;
        const teamManagerEmail = answers.managerEmail;
        const teamManagerOffice = answers.managerOfficeNumber;
        const teamMemberManager = new Manager(teamManagerName, teamManagerId, teamManagerEmail, teamManagerOffice)
        teamMemberArray.push(teamMemberManager)
        console.log(teamMemberArray)
        generateMoreTeams()

    })
}

//Function to generaTe engineer
function generateEngineer() {

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
    ]).then((answers) => {
        //

        const teamEngineerName = answers.engineerName;
        const teamEngineerId = answers.engineerId;
        const teamEngineerGitHub = answers.engineerGitHub;
        const teamEngineerEmail = answers.engineerEmail;
        const teamMemberEngineer = new Engineer(teamEngineerName, teamEngineerId, teamEngineerEmail, teamEngineerGitHub)
        teamMemberArray.push(teamMemberEngineer)
        console.log(teamMemberArray)
        generateMoreTeams()

    })
}

//Function to generaTe intern
function generateIntern() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Enter the intern name!',
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
    ]).then((answers) => {
        //

        const teamInternName = answers.internName;
        const teamInternId = answers.internId;
        const teamInternEmail = answers.internEmail;
        const teamInternSchool = answers.internSchool;
        const teamMemberIntern = new Intern(teamInternName, teamInternId, teamInternEmail, teamInternSchool)
        teamMemberArray.push(teamMemberIntern)
        console.log(teamMemberArray)
        generateMoreTeams()

    })
}
//function for repeating the questions

function generateMoreTeams() {

    inquirer.prompt([
        {
            type: 'confirm',
            name: 'enterMoreTeam',
            message: 'Would you like to add more team?',
            choices: ['Yes', 'No'],
            default: true,
        }
    ]).then((answers) => {
        if (answers.enterMoreTeam === true) {
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'moreRole',
                    message: 'Choose the role of the next team member!',
                    choices: ['Manager', 'Engineer', 'Intern', 'No more Team member'],
                }
            ]).then((answers) => {
                //Function to run through the role choose

                if (answers.moreRole === 'Manager') {
                    generateManager()
                }
                else if (answers.moreRole === 'Engineer') {
                    generateEngineer()
                }
                else if (answers.moreRole === 'Intern') {
                    generateIntern()
                }
                else {
                    console.log("Well Done!")


                }
                // fs.writeFile(`./dist/test.html`, generatorHtml(JSON.stringify(teamMemberArray)), function (err) {
                //     if (!err) { console.log("HTML GENERATED!") }
                //     else { console.log(err) }
                // })
            })
        }
        else {
            console.log("Well Done!")
           
           let html = generatorHtml.styleHtml(teamMemberArray)
            fs.writeFile(`./dist/test.html`, html , function (err) {
                if (!err) { console.log("HTML GENERATED!") }
                else { console.log(err) }
            })
        }



    }).catch((err) => {
        console.log(err);
    });
}

