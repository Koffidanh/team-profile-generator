//Function to generate the teamMemberArray
function generatorHtml(teamMemberArray) {
    return `
    <!DOCTYPE html>
<teamMemberArray lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${teamMemberArray[0].name}</title>
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
     .col-md-4 {
                padding: 10px;
            }
    </style>
</head>
<body>
<script>
for (let i = 0; i < teamMemberArray.length; i++) {
    if (teamMemberArray.role === "Manager") {
        teamMemberArray.icon = "fas fa-coffee"
        teamMemberArrayChange = "Office Number: "
    }
    if (teamMemberArray.role === "Engineer") {
        teamMemberArray.icon === "fas fa-glasses"
        teamMemberArrayChange = "GitHub: "
    }
    if (teamMemberArray.role === "Intern") {
        teamMemberArray.icon === "fas fa-graduation-cap"
        teamMemberArrayChange = "University: "
    }
}
</script>
<div class="jumbotron d-flex justify-content-center">
<h1 class="display-3">${teamMemberArray[0].name}</h1>
</div>
<div class="row">
<div class="col-md-4">
    <div class="card">
        <div class="cardHeader">
            <h2>${teamMemberArray[1].name}</h2>
            <div class="row">
                <div class="col-md-6">
                    <i class=${teamMemberArray[1].icon} style='font-size:30px;color:red'></i>
                </div>
                <div class="col-md-6">
                    <h4>${teamMemberArray[1].role}</h4>
                </div>
            </div>
        </div>
        <div class="cardFooter">
            <h4>ID: ${teamMemberArray[1].id}</h4>
            <h4>Email: <a href = "mailto: ${teamMemberArray[1].email}">${teamMemberArray[1].email}</a></h4>
            <h4>Office #: ${teamMemberArray[1].officeNumber}</h4>
           
        </div>
    </div>
</div>
<div class="col-md-4">
    <div class="card">
        <div class="cardHeader">
            <h2>${teamMemberArray[2].name}</h2>
            <div class="row">
                <div class="col-md-6">
                    <i class=${teamMemberArray[2].icon} style='font-size:30px;color:red'></i>
                </div>
                <div class="col-md-6">
                    <h4>${teamMemberArray[2].role}</h4>
                </div>
            </div>
        </div>
        <div class="cardFooter">
            <h4>ID: ${teamMemberArray[2].id}</h4>
            <h4>Email: <a href = "mailto: ${teamMemberArray[2].email}">${teamMemberArray[2].email}</a></h4>
            <h4>GitHub: <a href = "https://github.com/${teamMemberArray[2].gitHub}">${teamMemberArray[2].gitHub}</a></h4>
           
        </div>
    </div>
</div>
<div class="col-md-4">
    <div class="card">
        <div class="cardHeader">
            <h2>${teamMemberArray[3].name}</h2>
            <div class="row">
                <div class="col-md-6">
                    <i class=${teamMemberArray[3].icon} style='font-size:30px;color:red'></i>
                </div>
                <div class="col-md-6">
                    <h4>${teamMemberArray[3].role}</h4>
                </div>
            </div>
        </div>
        <div class="cardFooter">
            <h4>ID: ${teamMemberArray[3].id}</h4>
            <h4>Email: <a href = "mailto: ${teamMemberArray[3].email}">${teamMemberArray[3].email}</a></h4>
            <h4>University: ${teamMemberArray[3].internSchool}</h4>
           
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
    `

};
module.exports = generatorHtml;