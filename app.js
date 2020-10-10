const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const items = [];
const date = new Date;
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
};

const day = date.toLocaleDateString('en-US', options);

app.get('/', function(req, res) {
    res.render('list', { day, items });
});

app.post('/', function(req, res) {
    const item = req.body.newToDo;

    if (item !== '' && item !== null && item !== undefined) {
        items.push(item);
    }

    res.redirect('/');
});

app.listen(3000, () => console.log('App is running on port 3000'));