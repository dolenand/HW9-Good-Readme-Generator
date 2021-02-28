// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  ## Description of project
  ${data.description}
  ## Table of Contents
  ["Contributing Guidlines"](#contributing-guidlines)
  ["Questions"](#questions)
  ["Install Guide"](#install-guide)
  ["Tests"](#tests)
  ["Licensing"](#licnesing)
  ## Contributing Guidlines
  Thanks to ${data.contributing}.
  ## Questions
  You can reach me for questions at ${data.email} or find me on Github here ${data.Github}.

  ## Install Guide
  You can install the required dependencies with this command in the command line: ${data.installation}
  ## Tests
  Run tests in the command line with this command: ${data.test}.
  ## Liscensing
  This project is under the ${data.license}
`;
}

module.exports = generateMarkdown;