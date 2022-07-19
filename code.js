var http=require('http')
var data=require('./data')
http.createServer((req,res)=>{
    res.writeHead(200,{'const-type':'application\json'})
    res.write(JSON.stringify({name:"prateek",age:26, email:"anil@gmail.com"}))
    res.end()
}).listen(2002)
console.log("port run on 2002")