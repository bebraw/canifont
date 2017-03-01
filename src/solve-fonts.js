module.exports = function solveFonts({
  browsers,
  fonts,
}) {
  const browsersFonts = browsers.map(browser => browser.supports);

  const required = [];
  for (const font of fonts) {
    required.push(font);

    const supportedByAll = browsersFonts.every(supports => supports.indexOf(font) !== -1);
    if (supportedByAll) {
      break;
    }
  }

  return required;
};
