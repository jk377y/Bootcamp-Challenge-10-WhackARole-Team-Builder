function htmlGenerator(managers, engineers, interns) {
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="dist/team.css">
    <title>WhackARole Team Builder</title>
</head>
<body>
    <header><h1 class="title">WhackARole Team Builder</h1></header>
    <section class="teamContainer">
        <div class="managerContainer">
            ${generateManager(managers)}
        </div>
        <div class="engineerContainer">
            ${generateEngineer(engineers)} 
        </div>    
        <div class="internContainer">
            ${generateIntern(interns)}
        </div>
    </section>
</body>
</html>
    `
};

// creating div for manager
function generateManager(managers) {
    html += generateManager(managers[0]);
    return`
    <div class="manager">
        <ul>
            <li class="role"><span class="mainText underline">manager</span></li>
            <li class="mainText space-apart">Name:<span id="managerName" class="mainText">${managers.getName()}</span></li>
            <li class="mainText space-apart">ID#:<span id="managerId" class="mainText">${managers.getId()}</span></li>
            <li class="mainText centered margin-bottom-10">Email:<br><span id="managerEmail" class="mainText">${managers.getEmail()}</span></li>
            <li class="mainText centered">Phone:<span id="managerOfficeNumber" class="mainText">${managers.getmanagerOfficeNumber()}</span></li>
        </ul>
    </div><br>`
};

// creating divs for all the engineers
function generateEngineer(engineers) {
    for (i = 0; i < engineers.length; i++) {
        html += generateEngineer(engineers[i]);
    return`
        <div class="engineer">
            <ul>
                <li class="role"><span class="mainText underline">engineer</span></li>
                <li class="mainText space-apart">Name:<span id="engineerName" class="mainText">${engineers.getName()}</span></li>
                <li class="mainText space-apart">ID#:<span id="engineerId" class="mainText">${engineers.getId()}</span></li>
                <li class="mainText centered margin-bottom-10">Email:<span id="engineerEmail" class="mainText">${engineers.getEmail()}</span></li>
                <li class="mainText centered">Github:<span id="engineerGithub" class="mainText">https://github.com/${engineers.getGithub()}</span></li>
            </ul>
        </div><br>`
    };
};

// creating divs for all the interns
function generateIntern(interns) {
    for (i = 0; i < interns.length; i++) {
        html += generateIntern(interns[i]);
    return`
        <div class="intern">
            <ul>
                <li class="role"><span class="mainText underline">intern</span></li>
                <li class="mainText space-apart">Name:<span id="engineerName" class="mainText">${interns.getName()}</span></li>
                <li class="mainText space-apart">ID#:<span id="internId" class="mainText">${interns.getId()}</span></li>
                <li class="mainText centered margin-bottom-10">Email:<span id="internEmail" class="mainText">${interns.getEmail()}</span></li>
                <li class="mainText centered">School:<span id="internSchool" class="mainText">${interns.getSchool()}</span></li>
            </ul>
        </div><br>`
    };
};
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
module.exports = htmlGenerator;