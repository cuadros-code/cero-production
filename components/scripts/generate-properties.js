const fs = require('fs')
const { choices, decisions } = require('../tokens.js')

console.log('>>>> generate properties <<<<')



function buildCustomProperties () {

  
  const customProperties 

  const data = `
  :root {
    ${customProperties}
  }
  `
  
  fs.writeFile( './tokens.css', data, 'utf-8', (err) => {
  
    if (err) return console.log('err')
  
  
  })
  
}

buildCustomProperties()