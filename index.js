const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    var sumando1 = Number(req.query.sumando1)
    var sumando2 = Number(req.query.sumando2)
    var suma = sumando1 + sumando2
    var sumaString = suma.toString()
    res.send(sumaString)
})

app.listen(port, () => {
    console.log('App listening at htpp://localhost:${port}')
})

