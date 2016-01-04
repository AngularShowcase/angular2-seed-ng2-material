# Introduction

An example of how to integrate [Material Components for Angular2](https://github.com/justindujardin/ng2-material) by [Justin DuJardin - justindujardin](https://github.com/justindujardin)

Project setup based [angular2-seed](https://github.com/mgechev/angular2-seed.git)

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

```bash
git clone https://github.com/AngularShowcase/angular2-seed-ng2-material.git
cd angular2-seed-ng2-material
npm install       # or `npm run reinstall` if you get an error
npm start         # start with --env dev
npm run docs      # api document for app
```

# Directory Structure

```
.
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── app
│   ├── assets
│   │   ├── img
│   │   │   └── smile.png
│   │   └── main.css
│   ├── bootstrap.ts
│   ├── components
│   │   ├── about
│   │   │   ├── about.html
│   │   │   ├── about.ts
│   │   │   └── about_spec.ts
│   │   ├── app
│   │   │   ├── app.css
│   │   │   ├── app.html
│   │   │   ├── app.ts
│   │   │   └── app_spec.ts
│   │   └── home
│   │       ├── home.css
│   │       ├── home.html
│   │       ├── home.ts
│   │       └── home_spec.ts
│   ├── index.html
│   └── services
│       ├── name_list.ts
│       └── name_list_spec.ts
├── appveyor.yml
├── circle.yml
├── dist
│   └── dev
│       ├── assets
│       │   └── img
│       │       └── smile.png
│       ├── bootstrap.js
│       ├── components
│       │   ├── about
│       │   │   └── about.js
│       │   ├── app
│       │   │   └── app.js
│       │   └── home
│       │       └── home.js
│       ├── index.html
│       └── services
│           └── name_list.js
├── gulpfile.ts
├── karma.conf.js
├── package.json
├── test
│   ├── components
│   │   ├── about
│   │   │   ├── about.js
│   │   │   └── about_spec.js
│   │   ├── app
│   │   │   ├── app.js
│   │   │   └── app_spec.js
│   │   └── home
│   │       ├── home.js
│   │       └── home_spec.js
│   └── services
│       ├── name_list.js
│       └── name_list_spec.js
├── test-main.js
├── tools
│   ├── config.ts
│   ├── tasks
│   │   ├── build.bundles.ts
│   │   ├── build.deps.ts
│   │   ├── build.docs.ts
│   │   ├── build.html_css.prod.ts
│   │   ├── build.img.dev.ts
│   │   ├── build.index.ts
│   │   ├── build.js.dev.ts
│   │   ├── build.js.prod.ts
│   │   ├── build.sass.dev.ts
│   │   ├── build.test.ts
│   │   ├── check.versions.ts
│   │   ├── clean.ts
│   │   ├── karma.start.ts
│   │   ├── npm.ts
│   │   ├── serve.docs.ts
│   │   ├── server.start.ts
│   │   ├── tsd.ts
│   │   ├── tslint.ts
│   │   ├── watch.dev.ts
│   │   ├── watch.serve.ts
│   │   └── watch.test.ts
│   ├── typings
│   ├── utils
│   │   ├── server.ts
│   │   ├── tasks-tools.ts
│   │   ├── template-injectables.ts
│   │   └── template-locals.ts
│   └── utils.ts
├── tsconfig.json
├── tsd.json
└── tslint.json

```

# Configuration

Default application server configuration

```javascript
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

# How to extend?

If you want to use your custom libraries:

```bash
npm install my-library --save
vim tools/config.js
```
Add reference to the installed library in `NPM_DEPENDENCIES`:

```ts
export const NPM_DEPENDENCIES = [
  { src: 'systemjs/dist/system-polyfills.js', dest: LIB_DEST },


  { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true, dest: CSS_DEST }
  // ...
  { src: 'my-library/dist/bundle.js', inject: true, dest: LIB_DEST }
];

```
- `src` - relative to `node_modules`
- `inject` - indicates whether the library should be injected (if not you have to include it manually in `index.html`)
- `dest` - your library will be copied to this location. Used for the production build.

**Do not forget to add a reference to the type definition inside the files where you use your custom library.**

# Running test

```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window
```

# Contributing

Please see the [CONTRIBUTING](https://github.com/mgechev/angular2-seed/blob/master/CONTRIBUTING.md) file for guidelines.

# Change Log

You can follow the [Angular 2 change log here](https://github.com/angular/angular/blob/master/CHANGELOG.md).

# License

MIT
