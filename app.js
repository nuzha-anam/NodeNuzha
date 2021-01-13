const express = require('express');

//express app (instanciate)
const app = express();
app.listen(3000);
console.log('listening to 3000');


app.get('/add', (req, res) => {
    // res.send('<h1>home page</h1>');
    res.sendFile('./nuzha.html', { root: __dirname });
    console.log(5+6);
    
  });



app.get('/show', (req, res) => {
    //res.send('<p>home page</p>');
    console.log("hello");
  });

