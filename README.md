# Javascript Async Patterns Sample code

This is sample code that is part of my Javascript Async Patterns Talk. There are three samples:

- Native async/await support
    - Open index.html from demo-async-await-native-browser/ folder in a browser that natively supports
    async/await keywords. At the time of writing, Chrome v55 (e.g. Chrome Canary) and
    MS Edge with the experimental javascript features flag turned on. Please read the
    README.txt in the folder.
- Async/await support for legacy browsers, there are 2 examples:
    - This is the sample example as above but uses the BabelJS transpiler to generate
    javascript that will run in older browsers. The sample was tested in IE11 that doesn't
    support any of the relevant standards. You should open the index.html from
    demo-async-await-babeljs-all/ folder in a browser. You should also read the README.txt in the
    folder.
    - This is a second sample example as above but uses the Typescript compiler to generate
    javascript that will run in older browsers. The sample was tested in IE11 that doesn't
    support any of the relevant standards. You should open the index.html from
    demo-async-await-typescript-all/ folder in a browser. You should also read the README.txt in the
    folder.

You can find the associated presentation on my site, <a href="http://itsnull.com/presentations/js-async/">itsnull.com</a>