const combinations = require('combinations');

// XXX: This can be abstracted (naming) since it's just a solver
module.exports = function solveFonts({
  browsers,
  fonts,
}) {
  const minimumFonts = browsers.map(({ supports }) => supports);
  const alternatives = fonts.map((font) => {
    return (
    {
      font,
      matches: minimumFonts.map(minimum => minimum.indexOf(font) >= 0),
    }
    );
  });
  const scoredCombinations = combinations(alternatives).map((combination) => {
    const matches = combination.map(({ matches }) => matches).reduce((all, array) => (
      array.map((a, i) => a || all[i])
    ), []).filter(a => a);

    return matches.length === minimumFonts.length && combination.map(({ font }) => font);
  }).filter(a => a);

  const recordLength = scoredCombinations.reduce((record, combination) => (
    combination.length < record.length ? combination : record
  ), new Array(fonts.length)).length;

  return scoredCombinations.filter(combination => combination.length === recordLength);
};
