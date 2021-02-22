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

const teamMemberArray = [];

// function to initialize program
function init() {
    //Prompt questions
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'teamMember',
            message: 'Would you like to add a team member?',
            choices: ['Yes', 'No'],
            default: true,
        }
    ]).then((answers) => {
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
        generateHtml()
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
        writeFileAsync('README.md', generateMarkdown((data)))
        generateMoreTeams()
        generateHtml()
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

         const teamInternName =  answers.internName;
         const teamInternId =  answers.internId;
         const teamInternEmail = answers.internEmail;
         const teamInternSchool = answers.internSchool;
        const teamMemberIntern = new Intern(teamInternName, teamInternId, teamInternEmail, teamInternSchool)
        teamMemberArray.push(teamMemberIntern)
        console.log(teamMemberArray)
        generateMoreTeams()
        generateHtml()
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
            })
        }
        else {
            console.log("Well Done!")
        }



    })
}
//Function to generate the html
function generateHtml() {
    <!doctype html>
    <html lang="en">
    
    <head>
        <title>Title</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <script src="https://use.fontawesome.com/releases/v5.15.2/js/all.js" data-auto-replace-svg="nest"></script>
        <link rel="stylesheet" href="/dist/index.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="jumbotron d-flex justify-content-center">
            <h1 class="display-3">My Team</h1>
    
        </div>
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <div class="cardHeader">
                        <h2>name</h2>
                        <div class="row">
                            <div class="col-md-6">
                                <i class='fas fa-coffee' style='font-size:30px;color:red'></i>
                            </div>
                            <div class="col-md-6">
                                <h4>Manager</h4>
                            </div>
                        </div>
                        
                        
                    </div>
            
                    
        </div>
        
    
    
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
    </body>
    
    </html>
}

    

