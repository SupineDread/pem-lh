const express = require('express')
const { engine } = require('express-handlebars')
const app = express();
const port = process.env.port || 8080;

app.engine('hbs', engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: 'hbs',
    defaultLayout: 'index',
    partialsDir: `${__dirname}/views/partials`,
}));

app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    // res.render('main', {layout: 'nolayout'})
    // send data
    res.render('main', {is: true, key: 'Value', deepKey: {deepValue: 12}, iter: [{a: 10, b: 20}, {a: 30, b: 40}]})
    //res.render('main')
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})