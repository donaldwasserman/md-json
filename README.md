### Markdown to JSON Processor

Use md-json to serve markdown files with YAML front-matter to return a promise of json-ready javascript objects.

Usage:

`npm install md-json` & `var mdJson = require('md-json');`


```js
//in express
app.get('/posts', function(req, res) {
  var posts = mdJson('posts');
  posts.then(function(data) {
    res.json(data);
  });
});

```

This has only been used in node v. 4.1.2 and is fully un-tested.
