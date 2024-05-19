// local modules
// const add = require('./local-1')
// const MyModule = require('./local-1')
const { a, add } = require("./local-1"); // Distructureing
const { a: a2, add: add2 } = require("./local-2"); // Name elias

console.log(add2(3, 4, 6));

// built-in-modules
// Documantation: https://nodejs.org/docs/latest/api/path.html
const path = require("path");


// console.log(path.dirname("/C:/Projects/level2-web-dev/m2-express-&-mongoose/07 Foundition of Express/7-2 What Is Module, Commonjs Vs Esm/index.js")); // C:\Projects\level2-web-dev\m2-express-&-mongoose\07 Foundition of Express\7-2 What Is Module, Commonjs Vs Esm\index.js
// console.log(path.parse("/F:/level2/learning-node/index.js"));
// console.log(path.join("/F:/level2/learning-node/", "local-1.js"));
