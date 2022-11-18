
import express from 'express';
import configViewEngine from "./configs/ViewEngine";

const app = express();
const port = 3000

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('hahaha/index.ejs')
});
app.get('/halo', (req, res) => {
    res.send(`Vinh Truong ne`)
})

app.listen(port, () => { // callback function
    console.log(`Example app listening on port ${port}`)
})