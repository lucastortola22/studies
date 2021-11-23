const fs = require('fs')

// fs.writeFile('message.txt', 'Hello world!', (error) => {
//     if(error) throw error

//     console.log('file has been written')
// })


fs.readFile('./message.txt', 'utf-8', (error, data) => {
    if(error) throw error

    console.log(data)
})
