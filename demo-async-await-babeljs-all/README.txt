Open index.html in IE, Firefox, Chrome and it should just work

This sample shows taking a file with async/await keyworks and using BabelJS to
transpile it to run in older browsers. The code has already been transpiled and
should just work. I tested in IE11.

The zip codes that work are 12121 and 34343. If you use the zip code 56565,
the Promise will be rejected. You can see how browsers handle unhandled
rejections, you can change the code in app.js to try different methods of
handling unhandled rejections. If you change the code, you will need to
manually transpile it, see the steps below.

The steps I used to transpile the code are listed below.

Convert app.js, services.js which async/await to work in IE11
-------------------------------------------------------------

Install babel
  npm install babel-cli
  npm install babel-preset-stage-3
  npm install babel-preset-es2015

Run babel on app.js to create app-converted.js
  .\node_modules\.bin\babel app.js -o app-converted.js --source-maps inline --presets babel-preset-es2015,babel-preset-stage-3

Run babel on services.js to create services-converted.js
  .\node_modules\.bin\babel services.js -o services-converted.js --source-maps inline --presets babel-preset-es2015,babel-preset-stage-3

Update index.html
  Make sure that app-converted.js and services-converted.js are being used.
  Include a Promise polyfill, I used bluebird.js
  Include Facebook Regenerator runtime, downloaded from here: 
      https://raw.githubusercontent.com/facebook/regenerator/master/packages/regenerator-runtime/runtime.js
    Renamed to regenerator-runtime.js
  Instead of Promise polyfill and Facebook regenerator, might be able to use babel-polyfill.js. Give it a try.

  You could automate this transpilation step using any number of tools: Gulp, Grunt, WebPack, NPM scripts.
  I did NOT use any of these tools so that this sample would be easier to follow. If you wanted your
  project to use transpilation I would recommend you use a tool to automate the transpilation.