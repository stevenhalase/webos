const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');


app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public')))

app.get('/', function (req, res) {
    res.sendFile('home.html', {root : './public/html/'})
});

app.listen(3000, function () {
    console.log('Server started at http://localhost:3000')
})
