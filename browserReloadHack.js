var writeFile = require('write');
// nodemon restart -> create this file -> rebuild client -> reload browser
// only in dev. mode
// see "reset" property of nodemon.json file
console.log("Trigger restart...");
writeFile('client/assets/browserReloadHack.txt', 'This content is added automatically in order to trigger a browser reload.', function(err) {
  if (err) console.log(err);
});