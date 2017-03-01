# canifont - Figure out what fonts to use

```javascript
const canifont = require('canifont');
const browserslist = require('browserslist');

canifont({
  // Parse `browserslist`
  browsers: browserslist(),

  // Possible fonts (optional)
  fonts: ['woff2', 'woff', 'svg-fonts', 'ttf']
});
// => ['woff2', 'woff']
```

There's also a CLI client (`canifont`) that performs the same.

## License

MIT.
