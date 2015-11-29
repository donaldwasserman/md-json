var path = require('path'),
    fs = require('fs'),
    marked = require('marked'),
    Promise = require('bluebird'),
    yfm = require('yaml-front-matter'),
    path = require('path');

    marked.setOptions({
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    });

module.exports = function(file, dir) {

  var contents = fs.readFileSync(dir+'/'+file, 'utf8');

  var results = yfm.loadFront(contents);
  var output = {};

  output.slug = path.basename(dir+'/'+file, '.md');

  for (var data in results) {
    if (results.hasOwnProperty(data)) {
      //console.log(data);
      if (data === '__content') {
        output.content = marked(results.__content);
      } else {
        output[data] = results[data];
      }
    }
  }
  return output;
};
