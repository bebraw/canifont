const getLowestVersions = require('./get-lowest-versions');

describe('getLowestVersions', function () {
  it('returns lowest versions', function () {
    const browsers = [
      'chrome 56',
      'chrome 55',
      'firefox 51',
      'firefox 50',
      'opera 43',
      'opera 42',
      'safari 10',
      'safari 9.1',
    ];
    const expected = {
      chrome: 55,
      firefox: 50,
      opera: 42,
      safari: 9,
    };

    expect(getLowestVersions(browsers)).toEqual(expected);
  });
});
