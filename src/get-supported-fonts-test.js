const getSupportedFonts = require('./get-supported-fonts.js');

describe('getSupportedFonts', function () {
  it('returns supported fonts', function () {
    const fonts = ['ttf'];
    const getSupport = () => browsers;
    const browsers = {
      chrome: { y: 4 },
    };
    const expected = [
      {
        font: fonts[0],
        browsers,
      },
    ];

    expect(getSupportedFonts({
      fonts,
      getSupport,
    })).toEqual(expected);
  });
});
