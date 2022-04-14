const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());


// server.get('/:number', (req, res, next) => {
//     // try {

//     // } catch {

//     // } finally {

//     // }
//     try {
//         console.log('before throw');
//         let result = add_one_if_even(Number(req.params.number));
//         console.log('after throw');
//         res.json(result);
//     } catch(err) {
//         res.status(500).json('oopsie, you sent an odd number');
//     }
// })

// function add_one_if_even(number){
//     throw_if_odd(number);
//     return number + 1;
// }

// function throw_if_odd(number) {
//     if(number % 2 == 1){
//         throw new Error('There was an internal server error');
//     }
// }


// function f(a,b) {
//     return new Promise((resolve, reject) => {
//         if(a + b == 7) {
//             reject("we don't like 7's!!")
//         }
//         setTimeout(() => resolve(a + b), 1000);
//     })
// }

// server.get('/', async(req, res, next) => {
//     // try{
//     //     let result = await f(4,3);
//     //     res.status(200).json(result);
//     // } catch(err) {
//     //     res.status(500).json(err)
//     // }
//     for(let n=0; n<100000; n++){
//         console.log(1+1)
//     }
//     res.json('done')
// })

server.get('/', async (req, res, next) => {
    //res.json('hello World');
    res.json({ MESSAGE: process.env.MESSAGE});
})


module.exports = server;