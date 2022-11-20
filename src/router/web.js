import express from "express";
import homeController, { getHomepage, getDetailpage } from '../controller/homeController'

let router = express.Router();

const initWebRoute = (app) => {

    router.get('/', homeController.getHomepage)// ten route & MVC
    router.get('/details/user/:Id', homeController.getDetailpage)// : thay doi tham so
    router.post('/create-new-user', homeController.createNewuser) // 'post' phai giống bên index.ejs
    router.get('/halo', (req, res) => {
        res.send(`Vinh Truong ne`)
    })
    return app.use('/', router) // tien to trc khi init web route
}

module.exports = initWebRoute