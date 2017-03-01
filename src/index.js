const browserslist = require('browserslist');
const caniuse = require('caniuse-api');
const combinations = require('combinations');

module.exports = function calculateMinimumFonts({
  browsers,
  fonts = ['ttf', 'svg-fonts', 'woff', 'woff2']
}) {
  const supportedFonts = fonts.map(font => ({
    browsers: caniuse.getSupport(font),
    font
  }));
  const supportedBrowsers = getLowestVersions(browsers || browserslist());
  const supportedFontsPerBrowser = Object.keys(supportedBrowsers).map(browserName => {
    const browserVersion = supportedBrowsers[browserName];

    return {
      browser: browserName,
      supports: supportedFonts.map(({ browsers, font }) => (
        (browsers[browserName] && browsers[browserName].y <= browserVersion) && font
      )).filter(a => a)
    };
  });

  return solveFonts(fonts, supportedFontsPerBrowser);
}

// Adapted from babel-preset-env
function getLowestVersions(browsers) {
  return browsers.reduce((all, browser) => {
    const [browserName, browserVersion] = browser.split(" ");
    const parsedBrowserVersion = parseInt(browserVersion);

    if (!isNaN(parsedBrowserVersion)) {
      all[browserName] = Math.min(all[browserName] || Infinity, parsedBrowserVersion);
    }
    return all;
  }, {});
}

// XXX: This can be abstracted (naming) since it's just a solver
function solveFonts(allFonts, supportedFontsPerBrowser) {
  const minimumFonts = supportedFontsPerBrowser.map(({ supports }) => supports);
  const alternatives = allFonts.map(font => (
    {
      font,
      matches: minimumFonts.map(minimum => minimum.indexOf(font) >= 0)
    }
  ));
  const scoredCombinations = combinations(alternatives).map(combination => {
    const matches = combination.map(({ matches }) => matches).reduce((all, array) => (
      array.map((a, i) => a || all[i])
    ), []).filter(a => a);

    return matches.length === minimumFonts.length && combination.map(({ font }) => font);
  }).filter(a => a);

  const recordLength = scoredCombinations.reduce((record, combination) => (
    combination.length < record.length ? combination : record
  ), new Array(allFonts.length)).length;

  return scoredCombinations.filter(combination => combination.length === recordLength);
}
