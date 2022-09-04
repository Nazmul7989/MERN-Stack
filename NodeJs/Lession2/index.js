const fs = require('fs');

//Write or Create File
// fs.writeFile('builtInModule.txt','This is node js
// built-in-module.',(error)=>{
//     if (error){
//         console.log(error)
//     }else {
//         console.log('successful')
//     }
// })


//Update File
// fs.appendFile('builtInModule.txt','This file is updated',(error)=>{
//     if (error){
//         console.log(error)
//     }else {
//         console.log('successful')
//     }
// })


//Read File
// fs.readFile('builtInModule.txt','utf-8',(error,data)=>{
//     if (error){
//         console.log(error)
//     }else {
//         console.log(data)
//     }
// })

//Rename File
// fs.rename('builtInModule.txt','builtInModuleUpdated.txt',(error)=>{
//     if (error){
//         console.log(error)
//     }else {
//         console.log('successful')
//     }
// })

//Delete File
// fs.unlink('builtInModuleUpdated.txt',(error)=>{
//     if (error){
//         console.log(error)
//     }else {
//         console.log('successful')
//     }
// })

//Check File Exists or Not
fs.exists('builtInModule.txt',(result)=>{
    if (result){
        console.log('Found')
    }else {
        console.log('Not Found')
    }
})