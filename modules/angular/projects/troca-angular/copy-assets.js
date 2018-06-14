var copy = require('copy');

copy('./src/lib/assets/*.*', '../../dist/troca-angular/assets', function(err, files) {
    if (err) throw err;
    console.log('assets copy succesfull');
  });