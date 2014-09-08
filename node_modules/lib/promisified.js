var fs = require('fs');

function fs_readFile(file, encoding) {
    return new Promise(function(resolve, reject) {
        fs.readFile(file, encoding, function(err, data) {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

function fs_readDir(path) {
    return new Promise(function(resolve, reject) {
        fs.readdir(path, function(err, data) {
            if (err) reject(err)
            else resolve(data)
        })
    })
}

module.exports = {
    fs_readFile: fs_readFile,
    fs_readDir: fs_readDir
};
