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

//const generatorHtml = require('./lib/generatorHtml');
const { fileURLToPath } = require('url');

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
                    //    teamMemberArray.push('fas fa-coffee')
                    // const roleManager = new Employee(answers.role)
                    // teamMemberArray.push(roleManager)
                }
                else if (answers.role === 'Engineer') {
                    // teamMemberArray.push('fas fa-glasses')
                    // const roleEngineer = new Employee(answers.role)
                    // teamMemberArray.push(roleEngineer)
                    generateEngineer()

                }
                else {
                    // teamMemberArray.push('fas fa-graduation-cap')
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

        //const roleManager = new Employee('Manager')
        // teamMemberArray.push(roleManager)
        const teamManagerName = answers.managerName;
        const teamManagerId = answers.managerId;
        const teamManagerEmail = answers.managerEmail;
        const teamManagerOffice = answers.managerOfficeNumber;
        const teamManagerRole = 'Manager';
        const teamManagerIcon = 'fas fa-coffee';
        const teamMemberManager = new Manager(teamManagerName, teamManagerId, teamManagerEmail, teamManagerOffice, teamManagerRole, teamManagerIcon)
        //teamMemberManager.push('fas fa-coffee')
        teamMemberArray.push(teamMemberManager)
        console.log(teamMemberArray)

        //console.log(roleManager)
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
        //teamMemberArray.push('fas fa-glasses')
        const teamEngineerName = answers.engineerName;
        const teamEngineerId = answers.engineerId;
        const teamEngineerGitHub = answers.engineerGitHub;
        const teamEngineerEmail = answers.engineerEmail;
        const teamEngineerRole = 'Engineer';
        const teamEngineerIcon = 'fas fa-glasses';
        const teamMemberEngineer = new Engineer(teamEngineerName, teamEngineerId, teamEngineerEmail, teamEngineerGitHub, teamEngineerRole, teamEngineerIcon)
        //teamMemberEngineer.push('fas fa-glasses')
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
        //teamMemberArray.push('fas fa-graduation-cap')
        const teamInternName = answers.internName;
        const teamInternId = answers.internId;
        const teamInternEmail = answers.internEmail;
        const teamInternSchool = answers.internSchool;
        const teamInternRole = 'Intern';
        const teamInternIcon = 'fas fa-graduation-cap';
        const teamMemberIntern = new Intern(teamInternName, teamInternId, teamInternEmail, teamInternSchool, teamInternRole, teamInternIcon)

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



            })
        }
        else {
            // console.log("Well Done!")
            // console.log(teamMemberArray)

            //console.log(generatorHtml(teamMemberArray))


            // console.log(teamMemberArray[0]["name"])
            // console.log((JSON.stringify(teamMemberArray[0])))
            // console.log(teamMemberArray.length)

            fs.writeFile(`./dist/test.html`, generateTeam(teamMemberArray), function (err) {

                if (!err) { console.log("HTML GENERATED!") }
                else { console.log(err) }
            });

        }



    }).catch((err) => {
        console.log(err);
    });
}
//
function generateTeam(teamMemberArray) {

    return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
         <title>${teamMemberArray[0].name}</title>
        <script src="https://use.fontawesome.com/releases/v5.15.2/js/all.js" teamMemberArray-auto-replace-svg="nest"></script>
        
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
        </head>
        <body>
        <style>
        .cardHeader {
            width: 100%;
            height: 100%;
            background-color: blue;
            text-align: center;
            color: white;
           
        }
        .card {
            padding: 20px;
        }
         .col-md-4 {
                    padding: 10px;
                };
                .cardHeader {
                    width: 100%;
                    height: 100%;
                    background-color: blue;
                    text-align: center;
                    color: white;
                   
                }
                .card {
                    padding: 20px;
                }
        </style>
    
        <script>
        
        </script>
    
    
    <div class="jumbotron d-flex justify-content-center">
    <h1 class="display-3">${teamMemberArray[0].name}</h1>
    </div>
    
          ${html(teamMemberArray)}
            
          
      
    
    
    
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
    </html>`




}

//html
function html(teamMemberArray) {
    let card = [];
    let teamCards = [];
    for (let i = 1; i < teamMemberArray.length; i++) {

        card = `
        <div class="row">
    <div class="col-md-4">
        <div class="card">
            <div class="cardHeader"></div>
      <div class="cardHeader">
      <h2>${teamMemberArray[i].name}</h2>
      <div class="row">
      <div class="col-md-6">
      <i class='${teamMemberArray[i].icon}' style='font-size:30px;color:red'></i>
      </div>
      <div class="col-md-6">
      <h4>${teamMemberArray[i].role}</h4>
      </div>
      </div>
      </div>
      <div class="cardFooter">
    <h4>ID: ${teamMemberArray[i].id}</h4>
    <h4>Email: <a href = "mailto: ${teamMemberArray[i].email}">${teamMemberArray[i].email}</a></h4>
    ${teamMemberArray[i].officeNumber ? `<h4>Office number:  ${teamMemberArray[i].officeNumber}</h4>` : ``}
    ${teamMemberArray[i].gitHub ? `<h4>GitHub:  <a href="https://github.com/${teamMemberArray[i].gitHub}">https://github.com/${teamMemberArray[i].gitHub}</a></h4>` : ``}
    ${teamMemberArray[i].schoolName ? `<h4>University:  ${teamMemberArray[i].schoolName}</h4>` : ``}
    </div>
    
    </div>
        </div>
        </div>`
        //document.getElementById("cardAppend").append(card)
        teamCards.push(card)

    }
    //
    return teamCards.join('');
}

