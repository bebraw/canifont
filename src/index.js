const caniuse = require('caniuse-api');
const getLowestVersions = require('./get-lowest-versions');
const getSupportedFonts = require('./get-supported-fonts');
const getSupportedFontsPerBrowser = require('./get-supported-fonts-per-browser');
const solveFonts = require('./solve-fonts');

module.exports = function canifont({
  // browserslist definition
  browsers,
  // possible fonts
  fonts = ['ttf', 'svg-fonts', 'woff', 'woff2'],
  getSupport = caniuse.getSupport,
}) {
  return solveFonts({
    browsers: getSupportedFontsPerBrowser({
      browsers: getLowestVersions(browsers),
      fonts: getSupportedFonts({
        fonts,
        getSupport,
      }),
    }),
    fonts,
  });
};
