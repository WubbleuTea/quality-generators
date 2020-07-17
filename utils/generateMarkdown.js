// function to generate markdown for README

// can I dynamically create items in readme like if they dont want a contributing section?
function generateMarkdown(data) {
  const { title, description, table, installation, usage, license, contribute, tests, credit, github, email } = data
  return `# ${title}
  ![License Badge](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue)

  ## Description  
  ${description}  

  ## Table of Contents  
  ${table}  
  // If they need a table how would I generate that dynamically?

  ## Installation 
  //grab multiple steps?
  ${installation}  

  ## Usage  
  ${usage}

  ## Licencing  
  ${license}  

  ## Contributing  
  To contribute to this project please follow the guidlines listed below:  
  ${contribute}  

  ## Tests  
  // grab multiple times?  
  ${tests}  

  ## Credit  
  //grab multiple times?  
  ${credit}  

  ## Questions  
  If you have any questions do not hesitate to visit my GitHub repository or e-mail me.  
  [${github}](https://github.com/${github})  
  [${email}](mailto:${email})
`;
}

module.exports = generateMarkdown;
