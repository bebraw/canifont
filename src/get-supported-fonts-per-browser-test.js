const getSupportedFontsPerBrowser = require('./get-supported-fonts-per-browser');

describe('getSupportedFontsPerBrowser', function () {
  it('returns supported fonts perf browser', function () {
    const browsers = {
      chrome: 55,
    };
    const fonts = [
      {
        font: 'ttf',
        browsers: {
          chrome: { y: 4 },
        },
      },
    ];
    const expected = [
      {
        browser: 'chrome',
        supports: ['ttf'],
      },
    ];

    expect(getSupportedFontsPerBrowser({
      browsers,
      fonts,
    })).toEqual(expected);
  });
});
