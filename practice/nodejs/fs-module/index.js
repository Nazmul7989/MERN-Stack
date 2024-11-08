const fs = require('fs');

// console.log(fs)

//======= Create file ==========
// fs.writeFile('demo.txt','This is demo text',(err)=> {
//     if (err){
//         console.log(err)
//     }else {
//         console.log('File created successful')
//     }
// })

//======= Update  file ==========
// fs.appendFile('demo.txt',' Another text updated',(err)=> {
//     if (err){
//         console.log(err)
//     }else {
//         console.log('File updated successful')
//     }
// })

//======= Read file ==========
// fs.readFile('demo.txt','utf-8',(err,data)=> {
//     if (err){
//         console.log(err)
//     }else {
//         console.log(data)
//     }
// })

//======= Rename file ==========
// fs.rename('demo.txt','demo1.txt',(err)=> {
//     if (err){
//         console.log(err)
//     }else {
//         console.log('File renamed successfully')
//     }
// })

//======= Check file exists or not ==========
// fs.exists('demo.txt',(result)=> {
//     if (result){
//         console.log('File found')
//     }else {
//         console.log('File not found')
//     }
// })

//======= Remove file ==========
// fs.unlink('demo.txt',(err)=> {
//     if (err){
//         console.log(err)
//     }else {
//         console.log('File removed successfully')
//     }
// })

// try {
//     fs.unlinkSync('demo.txt')
//     console.log('File removed successfully')
// }catch (err){
//     console.log(err)
// }

//======= Make Directory ==========
// fs.mkdir('./new',{recursive: true}, (err) => {
//     if (err){
//         console.log(err)
//     }else {
//         console.log('File created');
//     }
// })

//======= Open Directory ==========
// fs.opendir('./new',(err, files) => {
//     if (err){
//         console.log(err)
//     }else {
//         console.log(files)
//     }
// })

//======= Remove empty Directory ==========
// fs.rmdir('./new', (err) => {
//     if (err) {
//         console.error(err);
//     }else {
//         console.log('Directory removed.');
//     }
// })

//======= Remove Directory including file ==========
// fs.rm('./new', { recursive: true, force: true }, (err) => {
//     if (err){
//         console.error(err);
//     }else {
//         console.log('Directory removed')
//     }
// })

//======= Check  file status ==========
// fs.stat('demo.txt', (err, stats) => {
//     if (err){
//         console.error(err);
//     }else {
//         console.log(stats.isFile());
//     }
// })
