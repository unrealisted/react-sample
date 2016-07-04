var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/src'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/src/index.html')
})



app.listen(port, function () {
	console.log(__dirname);
    console.log('Example app listening on port 8080!');
});