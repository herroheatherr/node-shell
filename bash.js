process.stdout.write('prompt > ');

//require statement should be done here so that it requires once
//when you require, it takes a little bit of time
const pwd = require('./pwd');

const ls = require ('./ls');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd'){
    pwd();
  }
  else if (cmd === 'ls'){
    ls();
  }
  else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
