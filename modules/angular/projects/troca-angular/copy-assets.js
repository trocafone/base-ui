var copy = require('copy');

copy('./src/lib/assets/*.*', '../../../../dist/angular/assets', function(err, files) {
    if (err) throw err;
    console.log('assets copy succesfull');
  });