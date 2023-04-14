# INSTALLATION

1. Run `npm i` in both directories 'next' and '@package/bug' to install next and mongoose.
2. Run `npm link` in '@package/bug'
3. Run `npm link @package/bug` in 'next'

# BUG

If you start the next server and go to 'http://localhost:4000/from-app' no errors appear in console.

If you go to 'http://localhost:4000/from-package' your console looks like this:

```
warn  - ../@package/bug/node_modules/debug/src/node.js
Module not found: Can't resolve 'supports-color' in '/@package/bug/node_modules/debug/src'

Import trace for requested module:
../@package/bug/node_modules/debug/src/node.js
../@package/bug/node_modules/debug/src/index.js
../@package/bug/node_modules/mquery/lib/mquery.js
../@package/bug/node_modules/mongoose/lib/index.js
../@package/bug/node_modules/mongoose/index.js

../@package/bug/node_modules/mongodb/lib/deps.js
Module not found: Can't resolve 'kerberos' in '/@package/bug/node_modules/mongodb/lib'

Import trace for requested module:
../@package/bug/node_modules/mongodb/lib/deps.js
../@package/bug/node_modules/mongodb/lib/index.js
../@package/bug/node_modules/mongoose/lib/index.js
../@package/bug/node_modules/mongoose/index.js
```