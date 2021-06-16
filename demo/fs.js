const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) {
//         throw err;
//     }

//     console.log('папка создана')
// })

// function test(file) {
//     return path.join(__dirname, 'test', file)
// }
// console.log(test('test.js'))


const filePath = path.join(__dirname, 'test', 'text.txt')

fs.writeFile(filePath)