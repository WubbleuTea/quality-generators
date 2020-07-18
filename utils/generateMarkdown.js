// function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, table, installation, usage, usageConfirm, usageImg, license, contributeConfirm, contribute, testsConfirm, tests, technology, credit, github, email } = data
  let bodyString = '';
  let licenseItem = license
  // generate table of contents
  const generateTable = () => {
    if (table === true) {
     return `\n## Table of Contents  
[Installation](#Installation)  
[Usage](#Usage)  
[Licensing](#Licensing)  
${checkConfirms()}\n` 
    } else {
      checkConfirms();
      return '';
    }
  }
  //checking for two optional README sections and adding them to the table of contents and the body.
  const checkConfirms = () => {
    let tableString = '';
    //
    if (contributeConfirm === true) {
      tableString += `[Contributing](#Contributing)  \n` 
      bodyString += `## Contributing  
To contribute to this project please follow the guidlines listed below:  
${contribute}\n\n` 
    } 
    // tests writing if true
    if (testsConfirm == true) {
      tableString += `[Test(s)](#Tests)  \n`
      bodyString += `## Tests\n${tests}\n\n`    
    }
    //Things that are always going to be in the README is written here
    tableString += `[Technologies](#Technologies)  \n[Credits](#Credits)  \n[Questions](#Questions)`
    bodyString += `${allTech()}\n${allCredits()}
## Questions  
If you have any questions do not hesitate to visit my GitHub repository or e-mail me.  
GitHub: [${github}](https://github.com/${github})  
E-mail: [${email}](mailto:${email})\n`;
    return tableString
};
  //check for installation steps and write the section out.
  let installationArr = installation.split('&&')
  const installationSteps = () => {
    let installationString = `## Installation\n`
    installationArr.forEach(step => {
      installationString += `- ${step.trim()}\n`
    });
    return installationString
  }

  const usageCheck = () => {
    if (usageConfirm == true) {
      return `${usage}  \n![${usage}](/assets/images/${usageImg})`;
    } else {
      return usage;
    }
  }

  const createBadge = () => {
    if (licenseItem === 'None') {
      return `[![License Badge](https://img.shields.io/badge/license-${license}-red)](#)`
    } else if (licenseItem === 'BSD 3') {
      licenseItem = `The license for this application is [${license}](https://opensource.org/licenses/BSD-3-Clause).`
      return `[![License Badge](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue)](https://opensource.org/licenses/BSD-3-Clause)`
    } else {
      licenseItem = `The license for this application is [${license}](https://opensource.org/licenses/${license.replace(/ /g, '-')}).`
      return `[![License Badge](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue)](https://opensource.org/licenses/${license.replace(/ /g, '-')})`
    }
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
  //check for technologies used and write the section out.
  let techArr = technology.split('&&')
  const allTech = () => {
    let techSection = `## Technologies \n`
    techArr.forEach(technology => {
      techSection += `- ${technology.trim()}\n`
    })
    return techSection;
  }

//the actual README 
  return `# ${title}
${createBadge()}

## Description  
${description}
${generateTable()}
${installationSteps()}
## Usage  
${usageCheck()}
  
## Licensing  
${licenseItem}  

${bodyString}`
}

module.exports = generateMarkdown;