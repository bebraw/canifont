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
});
