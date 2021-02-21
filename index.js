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

const teamMember = [];

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
                            name: 'role1',
                            message: 'Choose the role of the next team member!',
                            choices: ['Engineer', 'Intern'],
                        }
                    ]).then((answers) => {
                        if (answers.role1 === 'Engineer') {
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
                                    type: 'confirm',
                                    name: 'enterIntern',
                                    message: 'Would you like to add an intern?',
                                    choices: ['Yes', 'No'],
                                    default: true,
                                }
                            ]).then((answers) => {
                                if (answers.enterIntern === true) {
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
                                            type: 'confirm',
                                            name: 'moreTeam',
                                            message: 'Would you like to add more team member?',
                                            choices: ['Yes', 'No'],
                                            default: true,
                                        },
                                    ]).then((answers) => {
                                        //Function to run through the role choose

                                        if (answers.moreTeam === true) {
                                            inquirer.prompt([
                                                {
                                                    type: 'list',
                                                    name: 'moreRole1',
                                                    message: 'Choose the role of the next team member!',
                                                    choices: ['Manager', 'Engineer', 'Intern'],
                                                }
                                            ]).then((answers) => {
                                                if (answers.moreRole1 === 'Manager') {
                                                    inquirer.prompt([
                                                        {
                                                            type: 'input',
                                                            name: 'managerName1',
                                                            message: 'Enter the manager name!',
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'managerID1',
                                                            message: 'Enter the manager employee ID!',
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'managerEmail1',
                                                            message: 'Enter the manager email address!',
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'managerOfficeNumber1',
                                                            message: 'Enter the manager office phone number!',
                                                        },
                                                        {
                                                            type: 'list',
                                                            name: 'role2',
                                                            message: 'Choose the role of the next team member!',
                                                            choices: ['Engineer', 'Intern', 'No'],
                                                        }
                                                    ]).then((answers) => {
                                                        if (answers.role2 === 'Engineer') {
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
                                                                    type: 'confirm',
                                                                    name: 'enterIntern1',
                                                                    message: 'Would you like to add an intern?',
                                                                    choices: ['Yes', 'No'],
                                                                    default: true,
                                                                }
                                                            ]).then((answers) => {
                                                                if (answers.enterIntern1 === true) {
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
                                                                            type: 'confirm',
                                                                            name: 'moreTeam1',
                                                                            message: 'Would you like to add more team member?',
                                                                            choices: ['Yes', 'No'],
                                                                            default: true,
                                                                        },
                                                                    ]).then((answers) => {
                                                                        //Function to run through the role choose

                                                                        if (answers.moreTeam1 === true) {
                                                                            inquirer.prompt([
                                                                                {
                                                                                    type: 'list',
                                                                                    name: 'moreRole1',
                                                                                    message: 'Choose the role of the next team member!',
                                                                                    choices: ['Manager', 'Engineer', 'Intern'],
                                                                                }
                                                                            ])
                                                                        }

                                                                    })

                                                                }

                                                                else if (answers.role2 === 'Intern') {
                                                                    inquirer.prompt([
                                                                        {
                                                                            type: 'input',
                                                                            name: 'internName1',
                                                                            message: 'Enter the Intern name!',
                                                                        },
                                                                        {
                                                                            type: 'input',
                                                                            name: 'internId1',
                                                                            message: 'Enter the intern ID!',
                                                                        },
                                                                        {
                                                                            type: 'input',
                                                                            name: 'internEmail1',
                                                                            message: 'Enter the intern email!',
                                                                        },
                                                                        {
                                                                            type: 'input',
                                                                            name: 'internSchool1',
                                                                            message: 'Enter the intern school name!',
                                                                        },
                                                                        {
                                                                            type: 'confirm',
                                                                            name: 'moreTeam2',
                                                                            message: 'Would you like to add more team member?',
                                                                            choices: ['Yes', 'No'],
                                                                            default: true,
                                                                        },
                                                                    ]).then((answers) => {
                                                                        console.log('\nOrder receipt:');
                                                                        console.log(JSON.stringify(answers, null, '  '));
                                                                        // Append answers in the log.text file
                                                                        //fs.appendFile('log.txt', `${JSON.stringify(answers)}\n`, (err) =>

                                                                        //This argument create an error if the command if error were found or else console log "Commit logged!"
                                                                        err ? console.error(err) : console.log('Commit logged!')


                                                                    });
                                                                }
                                                            })
                                                        }

                                                    })
                                                }
                                                else if (answers.role === 'Engineer') {
                                                    inquirer.prompt([
                                                        {
                                                            type: 'input',
                                                            name: 'engineerName1',
                                                            message: 'Enter the engineer name!',
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'engineerId1',
                                                            message: 'Enter the engineer ID!',
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'engineerEmail1',
                                                            message: 'Enter the engineer email!',
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'engineerGitHub1',
                                                            message: 'Enter the engineer GitHub username!',
                                                        },
                                                        {
                                                            type: 'confirm',
                                                            name: 'enterIntern2',
                                                            message: 'Would you like to add an intern?',
                                                            choices: ['Yes', 'No'],
                                                            default: true,
                                                        }
                                                    ]).then((answers) => {
                                                        //Function to run through the role choose

                                                        if (answers.enterIntern2 === true) {
                                                            inquirer.prompt([
                                                                {
                                                                    type: 'input',
                                                                    name: 'internName2',
                                                                    message: 'Enter the Intern name!',
                                                                },
                                                                {
                                                                    type: 'input',
                                                                    name: 'internId2',
                                                                    message: 'Enter the intern ID!',
                                                                },
                                                                {
                                                                    type: 'input',
                                                                    name: 'internEmail2',
                                                                    message: 'Enter the intern email!',
                                                                },
                                                                {
                                                                    type: 'input',
                                                                    name: 'internSchool2',
                                                                    message: 'Enter the intern school name!',
                                                                },
                                                            ])
                                                        }

                                                    })

                                                }

                                                else if (answers.role === 'Intern') {
                                                    inquirer.prompt([
                                                        {
                                                            type: 'input',
                                                            name: 'internName3',
                                                            message: 'Enter the Intern name!',
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'internId3',
                                                            message: 'Enter the intern ID!',
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'internEmail3',
                                                            message: 'Enter the intern email!',
                                                        },
                                                        {
                                                            type: 'input',
                                                            name: 'internSchool3',
                                                            message: 'Enter the intern school name!',
                                                        },
                                                        {
                                                            type: 'confirm',
                                                            name: 'enterIntern3',
                                                            message: 'Would you like to add more team?',
                                                            choices: ['Yes', 'No'],
                                                            default: true,
                                                        }
                                                    ]).then((answers) => {
                                                        //Function to run through the role choose

                                                        if (answers.enterIntern3 === true) {



                                                        }

                                                    })

                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
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
let e = 0;
let m = 0;
let i = 0;
let t = 0;
//function to generate manager question
function generateManager() {
    m++
    inquirer.prompt([
        {
            type: 'input',
            name: `managerName${m}`,
            message: 'Enter the manager name!',
        },
        {
            type: 'input',
            name: `managerId${m}`,
            message: 'Enter the manager ID!',
        },
        {
            type: 'input',
            name: `managerEmail${m}`,
            message: 'Enter the engineer email!',
        },

    ]).then((answers) => {
        //

        // const `teamManagerName${m}` = `answers.managerName${m}`;
        // const `teamManagerId${m}` = `answers.managerId${m}`;
        // const `teamManagerEmail${m}` = `answers.managerEmail${m}`;
        const teamMember = new Manager(`teamManagerName${m}`, `teamManagerId${m}`, `teamManagerEmail${m}`)
        teamMember.push(answers)

    })
}

//Function to generaTe engineer
function generateEngineer() {
    e++
    inquirer.prompt([
        {
            type: 'input',
            name: `engineerName${e}`,
            message: 'Enter the manager name!',
        },
        {
            type: 'input',
            name: `engineerId${e}`,
            message: 'Enter the manager ID!',
        },
        {
            type: 'input',
            name: `engineerEmail${e}`,
            message: 'Enter the engineer email!',
        },
        {
            type: 'input',
            name: `engineerGitHub${e}`,
            message: 'Enter the engineer GitHub username!',
        },
    ]).then((answers) => {
        //

        // const `teamEngineerName${e}` = `answers.engineerName${e}`;
        // const `teamEngineerId${e}` = `answers.engineerId${e}`;
        // const `teamEngineerEmail${e}` = `answers.engineerEmail${e}`;
        // const `teamEngineerGitHub${e}` = `answers.engineerGitHub${e}`;
        teamMember = new Manager(`teamEngineerName${e}`, `teamEngineerId${e}`, `teamEngineerEmail${e}`, `teamEngineerGitHub${e}`)
        teamMember.push(answers)

    })
}

//Function to generaTe intern
function generateIntern() {
    i++
    inquirer.prompt([
        {
            type: 'input',
            name: `internName${i}`,
            message: 'Enter the intern name!',
        },
        {
            type: 'input',
            name: `internId${i}`,
            message: 'Enter the intern ID!',
        },
        {
            type: 'input',
            name: `internEmail${i}`,
            message: 'Enter the intern email!',
        },
        {
            type: 'input',
            name: `internSchool${i}`,
            message: 'Enter the intern school name!',
        },
    ]).then((answers) => {
        //

        // const `teamInternName${i}` =  `answers.internName${i}`;
        // const `teamInternId${i}` =  `answers.internId${i}`;
        // const `teamInternEmail${i}` = `answers.internEmail${i}`;
        // const `teamInternSchool${i}` = `answers.internSchool${i}`;
        teamMember = new Manager(`teamInternName${i}`, `teamInternId${i}`, `teamInternEmail${i}`, `teamInternSchool${i}`)
        teamMember.push(answers)

    })
}
//function for repeating the questions

function generateMoreTeams() {
    t++
    inquirer.prompt([
        {
            type: 'confirm',
            name: `enterMoreTeam${t}`,
            message: 'Would you like to add more team?',
            choices: ['Yes', 'No'],
            default: true,
        }
    ]).then((answers) => {
        if (`enterMoreTeam${i}` === true) {
            inquirer.prompt([
                {
                    type: 'list',
                    name: `moreRole${t}`,
                    message: 'Choose the role of the next team member!',
                    choices: ['Manager', 'Engineer', 'Intern', 'No more Team member'],
                }
            ]).then((answers) => {
                //Function to run through the role choose

                if (`answers.moreRole${t}` === 'Manager') {
                    generateManager()
                }
                else if (`answers.moreRole${t}` === 'Engineer') {
                    generateEngineer()
                }
                else if (`answers.moreRole${t}` === 'Intern') {
                    generateIntern()
                }
                else {

                }
            })
        }

              
    })
}