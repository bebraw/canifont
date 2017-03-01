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
    const expected = [['ttf']];

    expect(solveFonts({
      browsers,
      fonts,
    })).toEqual(expected);
  });

  it('returns multiple solved fonts', function () {
    const browsers = [
      {
        browser: 'chrome',
        supports: ['ttf', 'woff'],
      },
    ];
    const fonts = ['ttf', 'woff'];
    const expected = [['ttf'], ['woff']];

    expect(solveFonts({
      browsers,
      fonts,
    })).toEqual(expected);
  });
});
