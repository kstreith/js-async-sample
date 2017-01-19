Open index.html in IE, Firefox, Chrome and it should just work

This sample shows taking a file with async/await keyworks and using Typescript 2.1 or later to
transpile it to run in older browsers. The code has already been transpiled and
should just work. I tested in IE11.

The zip codes that work are 12121 and 34343. If you use the zip code 56565,
the Promise will be rejected. You can see how browsers handle unhandled
rejections, you can change the code in app.ts to try different methods of
handling unhandled rejections. If you change the code, you will need to
manually transpile it, see the steps below.

The steps I used to transpile the code are listed below.

Convert app.js, services.js which async/await to work in IE11
-------------------------------------------------------------

Install typescript, 2.1 or later
  npm install -g typescript

Run typescript on app.ts, services.ts to create app.js, services.js
  tsc 

Update index.html
  Make sure that app.js and services.js are being used.
  Include a Promise polyfill, I used bluebird.js
  Include Typescript lib (e.g. tslib.js),
    If you don't want typescript helper functions generated into every .js file, you can instead use tslib
    Install via:
      npm install tslib
    Copy tslib.js from node_modules/tslib/tslib.js to directory where index.html is.
    I've already copied tslib.js into the same folder as index.html
  

  You could automate this transpilation step using any number of tools: Gulp, Grunt, WebPack, NPM scripts.
  I did NOT use any of these tools so that this sample would be easier to follow. If you wanted your
  project to use transpilation I would recommend you use a tool to automate the transpilation.