// function to generate markdown for README


// can I dynamically create items in readme like if they dont want a contributing section?
function generateMarkdown(data) {
  const { title, description, table, installation, usage, license, contributeConfirm, contribute, testsConfirm, tests, credit, github, email } = data
  const checkContribute = () => {
    if (contributeConfirm == true) {
      return `[Contributing](#Contributing)  `
    } else {
      return ''
    }
  }
  const checkTests = () => {
    if (testsConfirm == true) {
      return `[Test(s)](#Tests)  `
    } else {
    return ''
    }
  }
  return `# ${title}
  ![License Badge](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue)

  ## Description  
  ${description}  

  ## Table of Contents  
  // need a function to generate this entire block only if they say yes.  
  [Installation](#Installation)  
  [Usage](#Usage)  
  [Licensing](#Licensing)  
  ${checkContribute()}
  ${checkTests()}
  [Credits](#Credits)  
  [Questions](#Questions)  
  
  ## Installation 
  //grab multiple steps?
  ${installation}  

  ## Usage  
  ${usage}

  ## Licensing  
  ${license}  

  ## Contributing  
  To contribute to this project please follow the guidlines listed below:  
  ${contribute}  

  ## Tests  
  // grab multiple times?  
  ${tests}  

  ## Credits  
  //grab multiple times?  
  ${credit}  

  ## Questions  
  If you have any questions do not hesitate to visit my GitHub repository or e-mail me.  
  GitHub: [${github}](https://github.com/${github})  
  E-mail: [${email}](mailto:${email})
`;
}

module.exports = generateMarkdown;
