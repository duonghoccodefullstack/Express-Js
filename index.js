// import express from 'express';
// const app = express();

// // phương thức get với base API
// // app.get('', (req, res) => {
// //     const data = { school: 'MindX technology school' };
// //     res.send(data);
// // });
// app.get('/users/old',(req,res) => {
//     const data = [
//     {user :1,age:18},
//     {user:2,age:50}
// ]

    
//     res.send(data)
//     // console.log(data);
// })
// app.listen(8080, () => {
//     // console.log('Server is running!');

    
// });

// app.use(function(req, res, next){
//     console.log("A new request received at " + Date.now());
// //     app.get('', (req, res) => {
// //     const data = { school: 'MindX technology school' };
// //     res.send(data);
// // });
//     //This function call is very important. It tells that more processing is
//     //required for the current request and is in the next middleware
//     // function route handler.
//     next();
//  });
 
//  app.listen(3000);



// app.get('/:id', function(req, res){
//     res.send('The id you specified is ' + req.params.id);
//  });
//  app.listen(3000);

// app.get('/' ,(req,res) => {
//     console.log('Test');
//     // res.send('hi')
//     res.status(500)
    
// })
// app.listen(3000);

// router 

// app.set('view engine','ejs')

// app.get('/' ,(req,res) => {
//     console.log('Test');
//     // res.send('hi')
//     // res.status(500)
//     res.render("index" , {text : 'User'})
    
// })

// app.get('/users' ,(req,res) => {
//     res.send('User List')
// })
// app.get('/users/new' ,(req,res) => {
//     res.send('User New Form')
// })
// const express = require('express');

// const app = express();

// const userRouter = require('./routes/users');
// // const postRouter = require('./routes/post');

// app.use('/users', userRouter);
// // app.use('/users', postRouter);
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });


// query params

// app.get('/things/:id([0-9]{5})', function(req, res){
//     res.send('id: ' + req.params.id);
//  });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

//  open port  and handle 404 
// const port = 3000
// app.get('/',(req,res) => {
//     res.send('hello')
// })
// // app.listen(port, () => {
// //     console.log(`Server is running on port ${port}`);
// // })

// app.get('*', (req, res) => {
//     res.send('Sorry, this is an invalid URL.');
//  });
//  app.listen(3000);


//  Project Chat App BitCoin 
import express from 'express';
import http from 'http'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {Server} from 'socket.io'
import delay from 'delay'

const app = express();
const port = 3000

const sever = http.createServer(app)
// socket Io
const io = new Server(sever)

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// method
app.get('/',(req,res) => {
    // res.send('hello guys')
    res.sendFile(( __dirname + '/ChatBitCoin/index.html'))
})

// socket io
io.on('connection', (socket) => {
   
    socket.on('on-chat', (data) => {
        io.emit('user-chat', data);
        // console.log(data);
        
    });
});

async function BitCoin() {
    while (true) {
        const price = 9750 + Math.random() * 400  
        io.emit('bitcoin-price' , {
            price:parseFloat(price.toFixed(2))

        })
        await delay(1000)
    }
}
BitCoin()
// live port 
app.get('*', (req, res) => {
    res.send('Sorry, this is an invalid URL.');
});
sever.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
