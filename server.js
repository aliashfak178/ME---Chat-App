const express= require('express');
const { Socket } = require('socket.io');
const app = express()
const PORT = process.env.PORT || 3000;


// Load Static Files
app.use(express.static("public"))
// Middle Ware
app.use(express.urlencoded({extended:true}))




const server = app.listen(PORT,()=>{
    console.log(`server running on PORT: ${PORT}`);
})

//  Web Sockets 
const io = require('socket.io')(server);
io.on('connection',(socket) =>{
    console.log('connected')
    socket.on('message',(msg)=>{
          socket.broadcast.emit('message',msg);
    })
})