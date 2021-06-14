const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(path.dirname, 'test'), (err) => {
    if (err) {
        throw err;
    }
})