const data = require('../sql')

module.exports = {
    getProduk: (req, res) => {
        console.log(req.query)
        let sqlGet = ""
        if (req.query.sort=='asc'){
            sqlGet = `Select * from data_pelaggan order by ${req.query.colom} asc;`
        }else if (req.query.sort=='desc'){
            sqlGet = `Select * from data_pelaggan by ${req.query.colom} desc;`
        }else {
            sqlGet = 'Select * from data_pelaggan;'
        }
        data.query(sqlGet, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },
    addProduk: (req, res) => {
        let sqlAdd = `Insert Into data_pelaggan (nama,alamat,hp,kode_pos,kredit,id_sales) values (${data.escape(req.body.nama)}, ${data.escape(req.body.alamat)}, ${data.escape(req.body.hp)}, ${data.escape(req.body.kode_pos)}, ${data.escape(req.body.kredit)}, ${data.escape(req.body.id_sales)})`
        console.log(sqlAdd)
        data.query(sqlAdd, (err, results) => {
            if (err) {
                console.log(err)
                res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },
    deleteProduk: (req, res) => {
        console.log (req.params.id)
        let sqlDelete = `delete from data_pelaggan where id = ${req.params.id};`
        data.query(sqlDelete, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            // res.status(200).send(results)
            let sqlGet = 'Select * from data_pelaggan;'
            data.query(sqlGet, (alert, resultsGet) => {
                if (alert) {
                    res.status(500).send(alert)
                }
                res.status(200).send(resultsGet)
            })
        })
    },
    editProduk: (req, res) => {
        console.log (req.params.id)
        let colom = []
        for (let key in req.body) { 
            colom.push  (`${key} = ${data.escape(req.body[key])}`)
        } 
        console.log("check colom", colom)
        let sqlEdit = `update data_pelaggan set ${colom.join()} where id = ${req.params.id};`
        console.log ('check sqledit',sqlEdit)
        data.query(sqlEdit, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            // res.status(200).send(results)
            let sqlGet = 'Select * from data_pelaggan;'
            data.query(sqlGet, (alert, resultsGet) => {
                if (alert) {
                    res.status(500).send(alert)
                }
                res.status(200).send(resultsGet)
            })
        })
    },
    getProdukAsc: (req, res) => {
        let sqlGet = 'Select * from data_pelaggan order by name asc;'
        data.query(sqlGet, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        })
    },

}