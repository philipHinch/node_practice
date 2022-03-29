//NOTES

//with express, once a response is sent, node stops going down the code. res.use() will only be triggered if no response was sent (this is called middleware)

const express = require('express');

const app = express();

//register view engine
app.set('view engine', 'ejs')

//listen for requests
app.listen(3000) //if we dont specify the second argument, it automatically refers to localhost

app.get('/', (req, res) => {
    //send ejs page
    //with ejs, just specify the name of the file in the views folder. no need for path and root object. now we "render" the ejs file
    //send dynamic values to page inside the second paramenter object
    res.render('index', { title: 'Home' })
})

//send html page
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create' })
})

//404
app.use((req, res) => {
    //middleware function, must be at the end of the code and is triggered if none of the above responses are sent
    res.status(404).render('404', { title: '404' }) //specify also the status code

}) 