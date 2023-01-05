function htmlGenerator(manager, engineers, interns) {

    `
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
                ${generateManager(manager[0])}
            </div>
            <div class="engineerContainer">
                ${generateEngineer(engineers[i])} 
            </div>    
            <div class="internContainer">
                ${generateIntern(interns[i])}
            </div>
        </section>
    </body>
    </html>
    
    `
};


// creating div for the manager
function generateManager(manager) {
    generateManager(manager[0]);
    return
    `
    <div class="manager">
                <ul>
                    <li class="role"><span class="mainText underline">manager</span></li>
                    <li class="mainText space-apart">Name:<span id="managerName" class="mainText">James</span></li>
                    <li class="mainText space-apart">ID#:<span id="managerId" class="mainText">12345</span></li>
                    <li class="mainText centered margin-bottom-10">Email:<br><span id="managerEmail" class="mainText">jk377y@gmail.com</span></li>
                    <li class="mainText centered">Phone:<span id="managerOfficeNumber" class="mainText">123-456-7890</span></li>
                </ul>
            </div><br>
    `
};
// creating divs for all the engineers
function generateEngineer(engineer) {
    for(i = 0; i < engineer.length; i++) {
        generateEngineer(engineer[i]);
    return
    `
            <div class="engineer">
                <ul>
                    <li class="role"><span class="mainText underline">engineer</span></li>
                    <li class="mainText space-apart">Name:<span id="engineerName" class="mainText">James</span></li>
                    <li class="mainText space-apart">ID#:<span id="engineerId" class="mainText">12345</span></li>
                    <li class="mainText centered margin-bottom-10">Email:<span id="engineerEmail" class="mainText">jk377y@gmail.com</span></li>
                    <li class="mainText centered">Github:<span id="engineerGithub" class="mainText">https://github.com/jk377y</span></li>
                </ul>
            </div><br>
    `
    }
};
// creating divs for all the interns
function generateIntern(intern) {
    for(i = 0; i < intern.length; i++) {
        generateIntern(intern[i]);
    return
    `
    <div class="intern">
                <ul>
                    <li class="role"><span class="mainText underline">intern</span></li>
                    <li class="mainText space-apart">Name:<span id="engineerName" class="mainText">James</span></li>
                    <li class="mainText space-apart">ID#:<span id="internId" class="mainText">12345</span></li>
                    <li class="mainText centered margin-bottom-10">Email:<span id="internEmail" class="mainText">jk377y@gmail.com</span></li>
                    <li class="mainText centered">School:<span id="internSchool" class="mainText">University of Texas @ Austin</span></li>
                </ul>
            </div><br>
    `
    };
};
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 


module.exports = htmlGenerator;