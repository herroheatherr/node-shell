


const fs = require('fs');

module.exports = () => {
    fs.readdir('./', 'utf8', (err, files) => {
        if (err){
            throw err;
        } else {
            process.stdout.write(files.join('\n'))
            process.stdout.write('\nprompt > ');
        }
    });
};


// module.exports = () => {
//     process.stdout.write(process.cwd());
//     process.stdout.write('\nprompt > ');
// };

