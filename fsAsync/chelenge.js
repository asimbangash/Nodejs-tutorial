const fs = require("fs");

// fs.mkdir("Asim",()=>{
//     console.log("create the folder");
// })

// fs.writeFile("bio.txt","Hello World",(err)=>{
//     console.log("folder has been created")
// })

// fs.appendFile("bio.txt"," how r u",(err)=>{
//     console.log("helllo");
// })

// fs.readFile("bio.txt","utf-8",(err,res)=>{
//     console.log(res);
// })

fs.rename("bio.txt","Bio.txt",(err)=>{
    console.log("hi")
})

fs.unlink("Bio.txt",(err)=>{
    console.log("ho");
})
fs.rmdir("./Asim",(err)=>{
    console.log("delete the folder");
})