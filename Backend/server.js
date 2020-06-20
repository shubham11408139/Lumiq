const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const PORT = 3000;

const letterController  = require('./controllers/letterCombination');

// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cors())

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/query',(req, res)=>{
   const result =   letterController.lettterCombinations(req , res);
             
   console.log("Query is:",result);
   if(result){
   res.json({
       statusCode : '200',
       code : req.query.code,
       answer : result
   })
}
   else{
    res.json({
    statusCode : '200',
    code : req.query.code,
    answer : ''
    })
   }
    res.end();
})

app.listen(PORT , ()=>{
    console.log("Server Start at PORT:",PORT);
})