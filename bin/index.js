#!/usr/bin/env node
// Checks against local browserslist
const browserslist = require('browserslist');
const canifont = require('../dist');

main();

function main() {
  const browserDefinition = browserslist.readConfig('./browserslist').defaults;
  const browsers = browserslist(browserDefinition);
  const suitableFonts = canifont({ browsers });

  console.log(suitableFonts); // eslint-disable-line no-console
}
