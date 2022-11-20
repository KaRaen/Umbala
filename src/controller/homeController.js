// import connection from '../configs/connectDB';
import pool from '../configs/connectDB';
let getHomepage = async (req, res) => {
    const [rows, fields] = await pool.execute("SELECT * FROM `users`") // dau ""
    return res.render('index.ejs', { dataUser: rows })
}
let getDetailpage = async (req, res) => {
    let userId = req.params.Id  // Id thay doi ben web.js
    let get_user = await pool.execute("SELECT * FROM `users` WHERE `id` = ?", [userId]);
    // console.log('check req', req.params)
    return res.send(JSON.stringify(get_user[0])) // = row [0]
}
module.exports = {
    getHomepage, getDetailpage
}