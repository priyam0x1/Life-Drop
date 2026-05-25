const { group } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const { v4 : uuidv4 } = require('uuid');
const methodOverride = require('method-override');

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'));

const port = 3000;
app.listen(port, ()=>{
    console.log(`Listening your request on ${port}`);
});

let donors = [
    {
        id : uuidv4(),
        name : "Priyam Pratim",
        group : 'B+',
        ph : '8723895806',
        city : 'Nalbari'
    },
    {
        id : uuidv4(),
        name : "Hritisman Baishya",
        group : 'A+',
        ph : '6003046039',
        city : 'Dhamdhama'
    }
];

/* Home Page || Start */

app.get('/home', (req, res) => {
    res.render('home.ejs');
});

/* Home Page || Complete */
/* About Page || Start */

app.get('/home/about', (req, res) => {
    res.render('about.ejs');
});

/* About Page || Complete */
/* Registration Page || Start */

app.get('/home/register', (req, res) => {
    res.render('register.ejs', {donors});
});

/* Registration Page || Complete */
/* Find Blood Page || Start */

app.get('/home/find', (req, res) => {
    res.render('find.ejs', {donors});
});

app.get('/home/find/register', (req, res) => {
    res.render('register.ejs');
});

app.post('/home/find', (req, res) => {
    let id = uuidv4();
    let {name, group, ph, city} = req.body;
    donors.push({id, name, group, ph, city});
    res.redirect('/home/find');
});

/* Find Blood Page || Complete */
/* See Datail Page || Start */

app.get('/home/find/:id/detail', (req, res) => {
    let {id} = req.params;
    let donor = donors.find((d) => id === d.id);
    res.render('detail.ejs', {donor});
});

/* See Datail Page || Complete */
/*  Delete Request || Start */

app.delete('/home/find/:id', (req, res) => {
    let {id} = req.params;
    donors = donors.filter((d) => id !== d.id);
    res.redirect('/home/find');
});

/*  Delete Request || Complete */
/*  Edit Page || Start */

app.get('/home/find/:id/edit', (req, res) => {
    let {id} = req.params;
    let donor = donors.find((d) => id === d.id);
    res.render('edit.ejs', {donor});
});

app.patch('/home/find/:id', (req, res) => {
    let id = req.params.id;
    let donor = donors.find((d) => id === d.id);
    let newName = req.body.name;
    let newGroup = req.body.group;
    let newPhone = req.body.ph;
    let newCity = req.body.city;
    donor.name = newName;
    donor.city = newCity;
    donor.ph = newPhone;
    donor.group = newGroup;
    res.redirect('/home/find');
});









