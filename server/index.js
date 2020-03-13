// http模块
let http=require('http')
let fs = require('fs')
http.createServer((req,res)=>{
    console.log('我来了')

    console.log(req.url)
    fs.readFile(`./${req.url}`,(err,data) =>{
       if(err){
           res.writeHead(404)
           res.end('404 not found')
       } 
       else{
          
           res.end(data)
       }
    })


}).listen(8080)