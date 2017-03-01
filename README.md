# canifont - Figure out what fonts to use

```javascript
const browserslist = require('browserslist');

canifont({
  // Parse `browserslist`
  browsers: browserslist(),

  // Possible fonts (optional)
  fonts: ['ttf', 'svg-fonts', 'woff', 'woff2']
});
```

There's also a CLI client (`canifont`) that performs the same.

## License

MIT.
