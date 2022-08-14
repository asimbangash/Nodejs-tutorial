const path = require("path");
console.log(path.dirname('C:/Users/fuji/nodejs/PathModule/path.js'));
console.log(path.basename('C:/Users/fuji/nodejs/PathModule/path.js'));
console.log(path.extname('C:/Users/fuji/nodejs/PathModule/path.js'));

const myPath = path.parse('C:/Users/fuji/nodejs/PathModule/path.js');
console.log(myPath.root)