var readFile = require('./lib/readFile');
var fs = require('fs');
var pluralize = require('pluralize');

module.exports = function(dir, fileName) {

  return new Promise(function(resolve, reject) {
    var folder = dir.toString();

    if (typeof fileName === 'undefined') {
      
      fs.readdir(dir, function(err, files) {
        if (!err) {
          var posts = [];

          files.forEach(function(e) {
            posts.push(readFile(e, dir));
          });
          var data = {};
          data[folder] = posts;

         resolve(data);
       } else {
         reject(err);
       }
      });

    } else {
      var title = fileName+'.md';
      var single = pluralize(folder, 1);
      var data = {};
      data[single] = readFile(title, dir);

      resolve(data);
    }
  });

};
