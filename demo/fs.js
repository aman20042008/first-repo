const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname, 'test/test'), (err) => {
    if (err) {
        throw err;
    }

    console.log('папка создана')
})