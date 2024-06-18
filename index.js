const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var a = Number(req.query.a)
    var array = []
    for (i = 1; i <= a; i++){
        array.push(i)
    }
    var arrayString = array.toString()
    res.send('[' + arrayString + ']')
})

app.listen(port, () => {
    console.log('App listening at htpp://localhost:${port}')
})

