//NOTES

//with express, once a response is sent, node stops going down the code. res.use() will only be triggered if no response was sent (this is called middleware)

const express = require('express');

const app = express();

//register view engine
app.set('view engine', 'ejs')

//listen for requests
app.listen(3000) //if we dont specify the second argument, it automatically refers to localhost

app.get('/', (req, res) => {
    //send method automatically figuers out the type of response, so there is no need to specify the type in the headers like:res.setHeader('Content-Type', 'text/html');

    //res.send('<h1>home page</h1>')

    //send html page
    res.sendFile('./views/index.html', { root: __dirname }) //specify the root directory (what is the path relative to?)
})

//send html page
app.get('/about', (req, res) => {
    //res.send('<h1>about page</h1>')
    res.sendFile('./views/about.html', { root: __dirname })
})

//redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

//404
app.use((req, res) => {
    //middleware function, must be at the end of the code and is triggered if none of the above responses are sent
    res.status(404).sendFile('./views/404.html', { root: __dirname }) //specify also the status code

}) 