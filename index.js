//Calling the inquirer module
const inquirer = require('inquirer');
//Calling the jest module
const jest = require('jest');
//Calling the fs module
const fs = require('fs');
//Calling the employee js
const Employee = require('./lib/employee')
//Calling the engineer js
const Engineer = require('./lib/engineer')
//Calling the intern js
const Intern = require('./lib/intern')
//Calling the manager js
const Manager = require('./lib/manager');
//Calling the Team name js
const Name = require('./lib/name');

const generatorHtml = require('./lib/generatorHtml');

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
                   // teamMemberArray.push('fas fa-coffee')
                    // const roleManager = new Employee(answers.role)
                    // teamMemberArray.push(roleManager)
                }
                else if (answers.role === 'Engineer') {
                    //teamMemberArray.push('fas fa-glasses')
                    // const roleEngineer = new Employee(answers.role)
                    // teamMemberArray.push(roleEngineer)
                    generateEngineer()
                    
                }
                else {
                    //teamMemberArray.push('fas fa-graduation-cap')
                    // const roleIntern = new Employee(answers.role)
                    // teamMemberArray.push(roleIntern)
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

        const roleManager = new Employee('Manager')
       // teamMemberArray.push(roleManager)
        const teamManagerName = answers.managerName;
        const teamManagerId = answers.managerId;
        const teamManagerEmail = answers.managerEmail;
        const teamManagerOffice = answers.managerOfficeNumber;
        const teamManagerRole = 'Manager';
        const teamMemberManager = new Manager(teamManagerName, teamManagerId, teamManagerEmail, teamManagerOffice, teamManagerRole)
        teamMemberArray.push(teamMemberManager)
       // console.log(teamMemberArray)


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

        // const roleEngineer = new Employee('Engineer')
        // teamMemberArray.push(roleEngineer)
        const teamEngineerName = answers.engineerName;
        const teamEngineerId = answers.engineerId;
        const teamEngineerGitHub = answers.engineerGitHub;
        const teamEngineerEmail = answers.engineerEmail;
        const teamEngineerRole = 'Engineer';
        const teamMemberEngineer = new Engineer(teamEngineerName, teamEngineerId, teamEngineerEmail, teamEngineerGitHub, teamEngineerRole)
        teamMemberArray.push(teamMemberEngineer)
       // console.log(teamMemberArray)
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
        // const roleIntern = new Employee('Intern')
        // teamMemberArray.push(roleIntern)
        const teamInternName = answers.internName;
        const teamInternId = answers.internId;
        const teamInternEmail = answers.internEmail;
        const teamInternSchool = answers.internSchool;
        const teamInternRole = 'Intern';
        const teamMemberIntern = new Intern(teamInternName, teamInternId, teamInternEmail, teamInternSchool,teamInternRole)
        teamMemberArray.push(teamMemberIntern) 
       // console.log(teamMemberArray)
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

                    // const roleManager = new Employee(answers.moreRole)
                    // teamMemberArray.push(roleManager)

                    generateManager()
                }
                else if (answers.moreRole === 'Engineer') {
                    // const roleEngineer = new Employee(answers.moreRole)
                    // teamMemberArray.push(roleEngineer) 
                    generateEngineer()

                }
                else if (answers.moreRole === 'Intern') {

                    // const roleIntern = new Employee(answers.moreRole)
                    // teamMemberArray.push(roleIntern) 

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
            console.log(teamMemberArray)

           //console.log(generatorHtml(teamMemberArray))
           
               console.log((JSON.stringify(teamMemberArray[0]["name"])))
               console.log((JSON.stringify(teamMemberArray[0])))
               console.log(teamMemberArray.length)
           for (let i = 0; i < teamMemberArray.length; i++) {
               //let html = JSON.stringify(generatorHtml(JSON.stringify(teamMemberArray)))
            fs.appendFile(`./dist/test.html`, generatorHtml(teamMemberArray[i]), function (err) {
                if (!err) { console.log("HTML GENERATED!") }
                else { console.log(err) }
                // if (teamMemberArray[i].role === "Manager") {
                //     teamMemberArray[i].icon = "fas fa-coffee"
                //     teamMemberArrayChange = "Office Number: "
                // }
                // if (teamMemberArray[i].role === "Engineer") {
                //     teamMemberArray[i].icon === "fas fa-glasses"
                //     teamMemberArrayChange = "GitHub: "
                // }
                // if (teamMemberArray[i].role === "Intern") {
                //     teamMemberArray[i].icon === "fas fa-graduation-cap"
                //     teamMemberArrayChange = "University: "
                // }
            })
            
               
           }
           
        }



    }).catch((err) => {
        console.log(err);
    });
}