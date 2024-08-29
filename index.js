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
const express = require('express');

const app = express();

const userRouter = require('./routes/users');
// const postRouter = require('./routes/post');

app.use('/users', userRouter);
// app.use('/users', postRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
