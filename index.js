const axios = require('axios');
const express = require('express');

const app = express()
app.listen('3001')

//middleware
app.use(express.json())

app.route('/').get ((req,res) => {
    axios.get('https://api.github.com/users/junior-slv')
    .then(result => res.send(`<img src='${result.data.avatar_url}'`))
    .catch(error => console.error(error))
})

