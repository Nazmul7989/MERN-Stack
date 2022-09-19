const mysql = require('mysql');

const config = {host: 'localhost',user: 'root',password: '',database: 'college'}

const connection = mysql.createConnection(config);

connection.connect(function (err){
    if (err){
        console.log('Connection Failed')
    }else {
        console.log('Connection Success')
        // insertData(connection)
        // selectData(connection)
        // updateData(connection)
        // deleteData(connection)
    }
})


const insertData = (connection)=>{
    let sql = "INSERT INTO `students`(`name`, `phone`, `address`) VALUES ('Md Nazmul Hasan','01736353553','Dhaka')"
    connection.query(sql,function (err){
        if (err){
            console.log('Data Insert failed!')
        }else {
            console.log('Data Insert Success')
        }
    })
}

const selectData = (connection)=>{
    let sql = "SELECT * FROM `students`"
    connection.query(sql,function (err,data){
        if (err){
            console.log('Data Selection failed!')
        }else {
            console.log('Data Selection Success')
            console.log(data)
        }
    })
}

const updateData = (connection)=>{
    let sql = "UPDATE `students` SET" +
        " `name`='Failsal Ahmmed" +
        " Apon',`phone`='01836734373',`address`='Rajshahi' WHERE `id`='1'"
    connection.query(sql,function (err){
        if (err){
            console.log('Data Update failed!')
        }else {
            console.log('Data Update Success')
        }
    })
}

const deleteData = (connection)=>{
    let sql = "DELETE FROM `students` WHERE `id`='2'"
    connection.query(sql,function (err){
        if (err){
            console.log('Data Delete failed!')
        }else {
            console.log('Data Delete Success')
        }
    })
}