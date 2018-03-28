
var express = require('express');

var app = express();

app.get('/', (req, res) => res.send('Hello To the Jenkins Something @ World!!'))

module.exports = app.listen(8080, () => console.log('Example app listening on port 8080!'))
