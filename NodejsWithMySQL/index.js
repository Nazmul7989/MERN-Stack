const http = require('http');
const mysql = require('mysql');
const host = '127.0.0.1';
const port = 8000;



const server = http.createServer((req,res)=>{

    const config = {host: 'localhost',user: 'root',password: '',database: 'college'}

const connection = mysql.createConnection(config);

    connection.connect(function (err){
        if (err){
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.end("<h3>Database Connection Failed</h3>")
        }else {
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write("<h3>Database Connection Success</h3>")

            // insertData(connection,res)
            // selectData(connection,res)
            // updateData(connection,res)
            // deleteData(connection,res)
        }
    })

    const insertData = (connection,res)=>{
        let sql = "INSERT INTO `students`(`name`, `phone`, `address`) VALUES ('Md Nazmul Hasan','01736353553','Dhaka')"
        connection.query(sql,function (err){
            if (err){
                res.end("<h3>Data Insert failed!</h3>")
            }else {
                res.end("<h3>Data Insert Success</h3>")
            }
        })
    }

    const selectData = (connection,res)=>{
        let sql = "SELECT * FROM `students`"
        connection.query(sql,function (err,data){
            if (err){
                res.end("<h3>Data Selection failed!</h3>")
            }else {
                res.write("<h3>Data Selection Success</h3>")
                res.end(JSON.stringify(data))
            }
        })
    }

    const updateData = (connection,res)=>{
        let sql = "UPDATE `students` SET" +
            " `name`='Mizanur Rahman" +
            " Apon',`phone`='01987374383',`address`='Natore' WHERE `id`='5'"
        connection.query(sql,function (err){
            if (err){
                res.end("<h3>Data Update failed!</h3>")
            }else {
                res.end("<h3>Data Update Success</h3>")
            }
        })
    }

    const deleteData = (connection,res)=>{
        let sql = "DELETE FROM `students` WHERE `id`='6'"
        connection.query(sql,function (err){
            if (err){
                res.end("<h3>Data Delete failed!</h3>")
            }else {
                res.end("<h3>Data Delete Success</h3>")
            }
        })
    }

})

server.listen(port,host, ()=>{
    console.log(`Server is running successfully at http://${host}:${port}`)
});
