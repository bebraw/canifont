module.exports = function getSupportedFonts({
  fonts,
  getSupport,
}) {
  return fonts.map((font) => {
    return ({
      browsers: getSupport(font),
      font,
    });
  });
};
