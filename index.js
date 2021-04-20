const fs = require('fs');

const verbs = JSON.parse(fs.readFileSync(`./verbs.json`, 'utf-8'));

let str = process.argv[2];

const pt = () => {
  for (let i = 0; i < verbs.length; i++) {
    for (let j = 0; j < verbs[i].length; j++) {
      if (verbs[i][j] == str) {
        return verbs[i][0];
      }
    }
  }
};

console.log(pt());
