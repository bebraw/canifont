// Checks against local browserslist
const browserslist = require('browserslist');
const canifont = require('../');

main();

function main() {
  canifont({
    browsers: browserslist(),
  });
}
