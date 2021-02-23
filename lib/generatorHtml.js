
//Function to generate the teamMemberArray
function generatorHtml(teamMemberArray) {
  return `
    <!DOCTYPE teamMemberArray>
<teamMemberArray lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${teamMemberArray.name}r</title>
    <script src="https://use.fontawesome.com/releases/v5.15.2/js/all.js" teamMemberArray-auto-replace-svg="nest"></script>
    <link rel="stylesheet" href="/dist/index.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
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
    </style>
</head>
<body>
<div class="jumbotron d-flex justify-content-center">
<h1 class="display-3">${teamMemberArray.name}</h1>

</div>

<div class="row">
<div class="col-md-3">
    <div class="card">
        <div class="cardHeader">
            <h2>${teamMemberArray.managerName}</h2>
            <div class="row">
                <div class="col-md-6">
                    <i class='fas fa-coffee' style='font-size:30px;color:red'></i>
                </div>
                <div class="col-md-6">
                    <h4>Manager</h4>
                </div>
            </div>

        </div>
        <div class="cardFooter">
            <h4>ID: ${teamMemberArray.managerId}</h4>
            <h4>Email: ${teamMemberArray.managerEmail}</h4>
            <h4>Office #: ${teamMemberArray.managerOfficeNumber}</h4>
        </div>

    </div>
</div>
<div class="col-md-3">
    <div class="card">
        <div class="cardHeader">
            <h2>${teamMemberArray.engineerName}</h2>
            <div class="row">
                <div class="col-md-6">
                    <i class='fas fa-glasses' style='font-size:48px;color:red'></i>
                </div>
                <div class="col-md-6">
                    <h4>Engineer</h4>
                </div>
            </div>

        </div>
        <div class="cardFooter">
            <h4>ID: ${teamMemberArray.engineerId}</h4>
            <h4>Email: ${teamMemberArray.engineerEmail}</h4>
            <h4>GitHub:  <a href="https://github.com/${teamMemberArray.engineerGitHub}">${teamMemberArray.engineerGitHub}</a></h4>
        </div>

    </div>
    <div class="card">
        <div class="cardHeader">
            <h2>${teamMemberArray.internName}</h2>
            <div class="row">
                <div class="col-md-6">
                <i class='fas fa-graduation-cap' style='font-size:48px;color:red'></i>
                </div>
                <div class="col-md-6">
                    <h4>Intern</h4>
                </div>
            </div>

        </div>
        <div class="cardFooter">
            <h4>ID: ${teamMemberArray.InternId}</h4>
            <h4>Email: ${teamMemberArray.InternEmail}</h4>
            <h4>Office #: ${teamMemberArray.internSchool}</h4>
        </div>

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
</teamMemberArray>
    `
     
};
module.exports = generatorHtml;