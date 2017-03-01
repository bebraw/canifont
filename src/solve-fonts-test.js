const solveFonts = require('./solve-fonts');

describe('solveFonts', function () {
  it('returns solved fonts', function () {
    const browsers = [
      {
        browser: 'chrome',
        supports: ['ttf'],
      },
    ];
    const fonts = ['ttf'];
    const expected = ['ttf'];

    expect(solveFonts({
      browsers,
      fonts,
    })).toEqual(expected);
  });

  it('returns the newest supported font', function () {
    const browsers = [
      {
        browser: 'chrome',
        supports: ['ttf', 'woff'],
      },
    ];
    const fonts = ['woff', 'ttf'];
    const expected = ['woff'];

    expect(solveFonts({
      browsers,
      fonts,
    })).toEqual(expected);
  });

  it('returns the minimum list of fonts to support all browsers', function () {
    const browsers = [
      {
        browser: 'chrome',
        supports: ['ttf', 'svg', 'woff', 'woff2'],
      },
      {
        browser: 'safari',
        supports: ['ttf', 'svg', 'woff'],
      },
    ];
    const fonts = ['woff2', 'woff', 'ttf'];
    const expected = ['woff2', 'woff'];

    expect(solveFonts({
      browsers,
      fonts,
    })).toEqual(expected);
  });
});
