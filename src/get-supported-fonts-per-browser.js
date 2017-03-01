module.exports = function getSupportedFontsPerBrowser({
  browsers,
  fonts,
}) {
  return Object.keys(browsers).map((browserName) => {
    const browserVersion = browsers[browserName];

    return {
      browser: browserName,
      supports: fonts.map(({ browsers, font }) => (
        (browsers[browserName] && browsers[browserName].y <= browserVersion) && font
      )).filter(a => a),
    };
  });
};
