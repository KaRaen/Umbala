import express from "express";

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', (req, res) => {
        res.render('hahaha/index.ejs')
    });
    router.get('/halo', (req, res) => {
        res.send(`Vinh Truong ne`)
    })
    return app.use('/', router)
}

module.exports = initWebRoute