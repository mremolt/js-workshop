var express   = require('express');
var directory = require('serve-index');

var app = express();

app.use(directory(__dirname));
app.use(express.static(__dirname));
app.listen(process.env.PORT || 3000);
