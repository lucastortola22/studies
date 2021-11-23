const path = require('path')

const fileLocation = path.join(__dirname, 'app.js')

const fileName = path.basename(fileLocation)

console.log(fileLocation)

console.log(fileName)

console.log(path.extname(fileName))