const caniuse = require('caniuse-api');
const getLowestVersions = require('./get-lowest-versions');
const solveFonts = require('./solve-fonts');

module.exports = function calculateMinimumFonts({
  // browserslist definition
  browsers,
  // possible fonts
  fonts = ['ttf', 'svg-fonts', 'woff', 'woff2'],
}) {
  const supportedFonts = fonts.map((font) => {
    return ({
      browsers: caniuse.getSupport(font),
      font,
    });
  });
  const supportedBrowsers = getLowestVersions(browsers);
  const supportedFontsPerBrowser = Object.keys(supportedBrowsers).map((browserName) => {
    const browserVersion = supportedBrowsers[browserName];

    return {
      browser: browserName,
      supports: supportedFonts.map(({ browsers, font }) => (
        (browsers[browserName] && browsers[browserName].y <= browserVersion) && font
      )).filter(a => a),
    };
  });

  return solveFonts(fonts, supportedFontsPerBrowser);
};
