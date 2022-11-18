
import express from 'express';
import configViewEngine from "./configs/ViewEngine";
import initWebRoute from './router/web'
require('dotenv').config()

const app = express();
const port = process.env.port || 8080

configViewEngine(app);

initWebRoute(app);
console.log('>>> check port:', port)


app.listen(port, () => { // callback function
    console.log(`Example app listening on port ${port}`)
})