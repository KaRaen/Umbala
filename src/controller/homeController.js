import pool from '../configs/connectDB';
let getHomepage = async (req, res) => {
    // console.log(typeof rows)
    // console.log('check', rows) row là dữ liệu, field là kiểu dữ liệu
    const [rows, fields] = await pool.execute("SELECT * FROM `users`") // dau ""
    return res.render('index.ejs', { dataUser: rows })
}
let getDetailpage = async (req, res) => {
    let userId = req.params.Id  // Id thay doi ben web.js
    let get_user = await pool.execute("SELECT * FROM `users` WHERE `id` = ?", [userId]);
    // console.log('check req', req.params)
    return res.send(JSON.stringify(get_user[0])) // = row [0]
}
let createNewuser = async (req, res) => {

    console.log('check req: ', req.body) // in ra xem
    // let firstname = req.body.firstname x4
    // tao bien luw du lieu - cu phap rut gon
    let { firstnameNew, lastnameNew, emailNew, addressNew } = req.body
    // them vao du lieu
    // mau cam la cac cot du lieu tren server
    // mau xanh la du lieu moi
    await pool.execute('insert into users (firstname, lastname, email, address) value (?,?,?,?)', [firstnameNew, lastnameNew, emailNew, addressNew])

    return res.redirect('/')
}
module.exports = {
    getHomepage, getDetailpage, createNewuser
}