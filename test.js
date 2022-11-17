const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Yeu My Duyen')
})
app.get('/halo', (req, res) => {
    res.send(`Vinh Truong ne`)
})

app.listen(port, () => { // callback function
    console.log(`Example app listening on port ${port}`)
})