const fs = require("fs");
const http = require("http");
const { Stream } = require("stream");

const server = http.createServer();

// 1st way
server.on("request",(req,res)=>{
    // fs.readFile("input.txt",(err, data)=>{
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // })

    // 2nd way (now we use Stream)
    // const rstream = fs.createReadStream("input.txt");
    // rstream.on("data",(chunkdata)=>{
    //     res.write(chunkdata);
    // })
    // rstream.on("end",()=>{
    //     res.end();
    // })
    // rstream.on("error",(err)=>{
    //     console.log(err);
    //     res.end("file not found");
    // })

    // 3rd way
    // Stream.pipe() the methode use to take a readable stream connect it to a writable stream.
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
});
server.listen(8000,"127.0.0.1");
