// function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, table, installation, usage, license, contributeConfirm, contribute, testsConfirm, tests, credit, github, email } = data
  let bodyString = '';
  // generate table of contents
  const generateTable = () => {
    if (table === true) {
     return `\n## Table of Contents  
[Installation](#Installation)  
[Usage](#Usage)  
[Licensing](#Licensing)  
${checkContribute()}\n` 
    } else {
      checkContribute();
      return '';
    }
  }
  //checking for two optional README sections and adding them to the table of contents and the body.
  const checkContribute = () => {
    let tableString = '';
    if (contributeConfirm === true) {
      tableString += `[Contributing](#Contributing)\n` 
      bodyString += `## Contributing  
To contribute to this project please follow the guidlines listed below:  
${contribute}\n\n` 
    } 
    if (testsConfirm == true) {
      tableString += `[Test(s)](#Tests)\n`
      bodyString += `## Tests\n${tests}\n\n`    
    }
    tableString += `[Credits](#Credits)  
[Questions](#Questions)`
    bodyString += `${allCredits()}
## Questions  
If you have any questions do not hesitate to visit my GitHub repository or e-mail me.  
GitHub: [${github}](https://github.com/${github})  
E-mail: [${email}](mailto:${email})\n`;
    return tableString
}
  //write the installation steps
  let installationArr = installation.split('&&')
  const installationSteps = () => {
    let installationString = `## Installation\n`
    installationArr.forEach(step => {
      installationString += `- ${step.trim()}\n`
    });
    return installationString
  }

  // check for credited people and write the section out.
  let creditArr = credit.split('&&')
  const allCredits = () => {
    let creditSection = `## Credits \n`
    creditArr.forEach(person => {
      creditSection += `- ${person.trim()}\n`
    })
    return creditSection;
  }

//the actual README 
  return `# ${title}
![License Badge](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue)

## Description  
${description}
${generateTable()}
${installationSteps()}
## Usage  
${usage}
  
## Licensing  
${license}  

${bodyString}`
}

module.exports = generateMarkdown;