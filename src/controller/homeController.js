import connection from '../configs/connectDB'


let getHomepage = (req, res) => {

    // simple query
    let data = [];

    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            console.log('>>> check mysql')
            // console.log(results); // results contains rows returned by server
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    lastname: row.lastname,
                    firstname: row.firstname

                })
            });

            return res.render('index.ejs', { dataUser: data, test: ' ahahha ' }) // chi dinh file view , tham so {} kieu object key: value

        })


}

module.exports = {
    getHomepage
}