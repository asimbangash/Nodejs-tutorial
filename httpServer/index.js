const http = require("http");
const fs = require("fs");
const { dirname } = require("path");


const server = http.createServer((req, res)=>{
    // console.log(req.url);
    if(req.url=="/"){
        res.end("helllo from home page");
    }else if(req.url=="/contact"){
        res.end("hello from contact page");
    }else if(req.url=="/userapi"){
        fs.readFile(`${--dirname}/userApi/userapi.json`,"utf-8",(err, data)=>{
            console.log(data);
            res.end(data);
        })
       ;
        
    }
    else{
        res.writeHead(404,{"Content-type" : "text/html" });
        res.end("<h1> error 404 was not found </h1>");
    }
    
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("hfla hfglfg")
})