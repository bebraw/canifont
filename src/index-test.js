const canifont = require('./index');

describe('canifont', function () {
  it('returns fonts that work', function () {
    const browsers = [
      'chrome 56',
    ];
    const supportedBrowsers = {
      chrome: { y: 4 },
    };
    const getSupport = () => supportedBrowsers;
    const fonts = ['ttf'];
    const expected = ['ttf'];

    expect(canifont({
      browsers,
      fonts,
      getSupport,
    })).toEqual(expected);
  });
});
