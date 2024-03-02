const express = require('express')
const app = express()


app.get('/hello', function(req, res){
    res.send('Chegou a resposta')
})

app.listen('3000', function(){
    console.log('Server Up port 3000')
})