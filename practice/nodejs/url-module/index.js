const url = require("url");

const staticUrl = 'https://gptrackr.com/1?name=nazmul&age=32';
const mysqlUrl = url.parse(staticUrl);

console.log(mysqlUrl.protocol);
console.log(mysqlUrl.href)
console.log(mysqlUrl.path)
console.log(mysqlUrl.pathname)
console.log(mysqlUrl.search)
console.log(mysqlUrl.query)
console.log(mysqlUrl.host)
console.log(mysqlUrl.hostname)

