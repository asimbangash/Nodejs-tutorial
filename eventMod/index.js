const EventEmitter = require("events");

const event = new EventEmitter();
event.on("checkPage",(sc, megs)=>{
    console.log(`status code is ${sc} and messegs is ${megs}`)
})

 event.emit("checkPage",200,"ok");