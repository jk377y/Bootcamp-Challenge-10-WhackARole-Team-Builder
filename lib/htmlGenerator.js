// create function to print the html document and fill in the values as entered via the terminal
function htmlGenerator(managers, engineers, interns)
{
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="team.css">
    <title>WhackARole Team Builder</title>
</head>
<body>
    <header><h1 class="title">WhackARole Team Builder</h1></header>
    <section class="teamContainer">
        <div class="managerContainer">
            ${buildManager(managers)}
        </div>
        <div class="engineerContainer">
            ${buildEngineers(engineers)}
        </div>
        <div class="internContainer">
            ${buildInterns(interns)}
        </div>
    </section>
</body>
</html>
    `
};

// creating div for the manager
function buildManager(managers) {
    let page = ""
    page += generateManager(managers[0])
    function generateManager(manager) {
        return`
        <div class="manager">
            <ul>
                <li class="role"><span class="mainText underline">${manager.getRole()}</span></li>
                <li class="mainText space-apart">Name:<span class="mainText">${manager.getName()}</span></li>
                <li class="mainText space-apart">ID#:<span class="mainText">${manager.getId()}</span></li>
                <li class="mainText centered">Email:<a href="mailto:1" class="email"><span>${manager.getEmail()}</span></a></li>
                <li class="mainText centered">Phone:<a href="tel:1"><span class="email">${manager.getOfficeNumber()}</span></a></li>
            </ul>
        </div><br>`
    } return page;
};

// creating divs for all the engineers
function buildEngineers(engineers) {
    let page = ""
    for (i = 0; i < engineers.length; i++) {
        page += generateEngineer(engineers[i])
    }
    function generateEngineer(engineer) {
        return`
        <div class="engineer">
            <ul>
                <li class="role"><span class="mainText underline">${engineer.getRole()}</span></li>
                <li class="mainText space-apart">Name:<span class="mainText">${engineer.getName()}</span></li>
                <li class="mainText space-apart">ID#:<span class="mainText">${engineer.getId()}</span></li>
                <li class="mainText centered">Email:<a href="mailto:${engineer.getEmail()}" class="email"><span>${engineer.getEmail()}</span></a></li>
                <li class="mainText centered">Github:<a href="https://github.com/${engineer.getGithub()}" target="_blank"><span class="email">${engineer.getGithub()}</span></a></li>
            </ul>
        </div><br>`
    }return page;
};

// creating divs for all the interns
function buildInterns(interns) {
    let page = ""
    for (i = 0; i < interns.length; i++) {
        page += generateIntern(interns[i])
    }
    function generateIntern(intern) {
        return`
        <div class="intern">
            <ul>
                <li class="role"><span class="mainText underline">${intern.getRole()}</span></li>
                <li class="mainText space-apart">Name:<span class="mainText">${intern.getName()}</span></li>
                <li class="mainText space-apart">ID#:<span class="mainText">${intern.getId()}</span></li>
                <li class="mainText centered">Email:<a href="mailto:3" class="email"><span>${intern.getEmail()}</span></a></li>
                <li class="mainText centered">School:<span class="mainText centered">${intern.getSchool()}</span></li>
            </ul>
        </div><br>`
    } return page;
};

module.exports = htmlGenerator;