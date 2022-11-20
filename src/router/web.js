import express from "express";
import homeController, { getHomepage } from '../controller/homeController'
let router = express.Router();

const initWebRoute = (app) => {

    router.get('/', homeController.getHomepage)// ten route & MVC
    router.get('/halo', (req, res) => {
        res.send(`Vinh Truong ne`)
    })
    return app.use('/', router) // tien to trc khi init web route
}

module.exports = initWebRoute