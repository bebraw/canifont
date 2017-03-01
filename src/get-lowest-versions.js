// Adapted from babel-preset-env
module.exports = function getLowestVersions(browsers) {
  return browsers.reduce((all, browser) => {
    const [browserName, browserVersion] = browser.split(' ');
    const parsedBrowserVersion = parseInt(browserVersion, 10);

    if (!isNaN(parsedBrowserVersion)) {
      all[browserName] = Math.min(all[browserName] || Infinity, parsedBrowserVersion);
    }

    return all;
  }, {});
};
