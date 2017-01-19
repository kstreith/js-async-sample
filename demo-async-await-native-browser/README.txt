Open index.html in a browser that natively supports async/await. 

At the time of this writing that is either Chrome v55 (e.g. Chsrome Canary) or
MS Edge if you enable experimental javascript features.

The zip codes that work are 12121 and 34343. If you use the zip code 56565,
the Promise will be rejected. You can see how browsers handle unhandled
rejections, you can change the code in app.js to try different methods of
handling unhandled rejections.

If you want to see how to make async/await work in older browsers, look at the
demo-async-await-all/ folder.
