
//Function to generate the teamMemberArray
function generatorHtml(teamMemberArray) {
  return `
    <!DOCTYPE html>
<teamMemberArray lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${teamMemberArray[0]["name"]}</title>
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
<h1 class="display-3">${teamMemberArray[0]["name"]}</h1>

</div>

<div class="row">
<div class="col-md-4">
    <div class="card">
        <div class="cardHeader">
            <h2>${teamMemberArray[3]["name"]}</h2>
            <div class="row">
                <div class="col-md-6">
                    <i class='fas fa-coffee' style='font-size:30px;color:red'></i>
                </div>
                <div class="col-md-6">
                    <h4>${teamMemberArray[1]["role"]}</h4>
                </div>
            </div>

        </div>
        <div class="cardFooter">
            <h4>ID: ${teamMemberArray[3]["id"]}</h4>
            <h4>Email: <a href = "mailto: ${teamMemberArray[3]["email"]}">${teamMemberArray[3]["email"]}</a></h4>
            <h4>Office #: ${teamMemberArray[3]["officeNumber"]}</h4>
        </div>

    </div>
</div>
<div class="col-md-4">
    <div class="card">
        <div class="cardHeader">
            <h2>${teamMemberArray[5]["name"]}</h2>
            <div class="row">
                <div class="col-md-6">
                    <i class='fas fa-glasses' style='font-size:48px;color:red'></i>
                </div>
                <div class="col-md-6">
                    <h4>${teamMemberArray[4]["role"]}</h4>
                </div>
            </div>

        </div>
        <div class="cardFooter">
            <h4>ID: ${teamMemberArray[5]["id"]}</h4>
            <h4>Email: <a href = "mailto: ${teamMemberArray[5]["email"]}">${teamMemberArray[5]["email"]}</a></h4>
            <h4>GitHub:  <a href="https://github.com/${teamMemberArray[5]["gitHub"]}">${teamMemberArray[5]["gitHub"]}</a></h4>
        </div>
    </div>
    </div>
    <div class="col-md-4">
    <div class="card">
        <div class="cardHeader">
            <h2>${teamMemberArray[7]["name"]}</h2>
            <div class="row">
                <div class="col-md-6">
                <i class='fas fa-graduation-cap' style='font-size:48px;color:red'></i>
                </div>
                <div class="col-md-6">
                    <h4>${teamMemberArray[6]["role"]}</h4>
                </div>
            </div>

        </div>
        <div class="cardFooter">
            <h4>ID: ${teamMemberArray[7]["id"]}</h4>
            <h4>Email: <a href = "mailto: ${teamMemberArray[7]["email"]}">${teamMemberArray[7]["email"]}</a></h4>
            <h4>School name: ${teamMemberArray[7]["schoolName"]}</h4>
        </div>

    </div>
</div>
</div>

</div>

<div class="row">
<div class="col-md-4">
    <div class="card">
        <div class="cardHeader">
            <h2>${teamMemberArray[3]["name"]}</h2>
            <div class="row">
                <div class="col-md-6">
                    <i class='fas fa-coffee' style='font-size:30px;color:red'></i>
                </div>
                <div class="col-md-6">
                    <h4>${teamMemberArray[1]["role"]}</h4>
                </div>
            </div>

        </div>
        <div class="cardFooter">
            <h4>ID: ${teamMemberArray[3]["id"]}</h4>
            <h4>Email: <a href = "mailto: ${teamMemberArray[3]["email"]}">${teamMemberArray[3]["email"]}</a></h4>
            <h4>Office #: ${teamMemberArray[3]["officeNumber"]}</h4>
        </div>

    </div>
</div>
<div class="col-md-4">
    <div class="card">
        <div class="cardHeader">
            <h2>${teamMemberArray[5]["name"]}</h2>
            <div class="row">
                <div class="col-md-6">
                    <i class='fas fa-glasses' style='font-size:48px;color:red'></i>
                </div>
                <div class="col-md-6">
                    <h4>${teamMemberArray[4]["role"]}</h4>
                </div>
            </div>

        </div>
        <div class="cardFooter">
            <h4>ID: ${teamMemberArray[5]["id"]}</h4>
            <h4>Email: <a href = "mailto: ${teamMemberArray[5]["email"]}">${teamMemberArray[5]["email"]}</a></h4>
            <h4>GitHub:  <a href="https://github.com/${teamMemberArray[5]["gitHub"]}">${teamMemberArray[5]["gitHub"]}</a></h4>
        </div>
    </div>
    </div>
    <div class="col-md-4">
    <div class="card">
        <div class="cardHeader">
            <h2>${teamMemberArray[7]["name"]}</h2>
            <div class="row">
                <div class="col-md-6">
                <i class='fas fa-graduation-cap' style='font-size:48px;color:red'></i>
                </div>
                <div class="col-md-6">
                    <h4>${teamMemberArray[6]["role"]}</h4>
                </div>
            </div>

        </div>
        <div class="cardFooter">
            <h4>ID: ${teamMemberArray[7]["id"]}</h4>
            <h4>Email: <a href = "mailto: ${teamMemberArray[7]["email"]}">${teamMemberArray[7]["email"]}</a></h4>
            <h4>School name: ${teamMemberArray[7]["schoolName"]}</h4>
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
</html>
    `
     
};
module.exports = generatorHtml;