const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
//Setup environment variables below
const port = (process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.engine('handlebars', exphbs ({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.get('/', (req, res )=> {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req,res) => {
    res.render('contact')
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

app.use(express.static ('public')); 
//This links to the public folder then links to the css style sheet.