const express = require('express')
const app = express();


app.use(express.json({ extended: false }));

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res){
    res.sendFile('index.html', { root: __dirname });
});

app.get('/contact', function(req, res){
    res.sendFile('contact.html', { root: __dirname });
});

app.listen(process.env.PORT || 3000)
console.log("server started ")
