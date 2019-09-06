// Cek sumber dibawah ini setelah app nya jadi
// Sumber ref bisa cek disini : https://kode.id/classroom/node-js-connecting-the-node-episode-1/53ec7d5e-4930-4a62-8ea8-08a3301aece8

const express = require('express');
const app = express();

// part 2.1 | menggunakan folder public supaya bisa diakses
// dan membuat file style2.css dan style2.scss
app.use(express.static('public'));

// part 2. set ejs dan buat file views/index.ejs
app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;
app.get('/', function(request, response){
    // response.send("Halo Brothers!");
    response.render('index');
});

app.listen(PORT);
console.log('Server Running on Port '+PORT);