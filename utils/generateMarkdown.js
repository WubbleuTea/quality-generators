// function to generate markdown for README

// how to get returns in the markup?
function generateMarkdown(data) {
  return `# ${data.title}
  ![License Badge](https://img.shields.io/badge/license-${data.licence.replace(/ /g, '%20')}-blue)

  ## Description  
  ${data.description}  

  ## Table of Contents  
  ${data.table}  
  // If they need a table how would I generate that?

  ## Installation 
  //grab multiple steps?
  ${data.installation}  

  ## Usage  
  ${data.usage}

  ## Licencing  
  ${data.licence}  

  ## Contributing  
  To contribute to this project please follow the guidlines listed below:  
  ${data.contribute}  

  ## Tests  
  // grab multiple times?  
  ${data.tests}  

  ## Credit  
  //grab multiple times?  
  ${data.credit}  

  ## Questions  
  If you have any questions do not hesitate to visit my GitHub repository or e-mail me.  
  [${data.github}](https://github.com/${data.github})  
  [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
