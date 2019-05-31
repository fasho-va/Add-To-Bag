const express = require('express');
const app = express();
const port = 3002;
const bodyparser = require('body-parser');
const CORS = require("cors");
const db = require('../db/index');

app.use(CORS());
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.get('/currentitem:id',(req,res)=>{
  db.getCurrentItem(req.params.id,(err,results)=>{
    if (err){
      console.log('we didnt get data from db',err)
    } else {
      console.log("this is the results from db", results)
      res.send(results)
    }
  })
}) 

app.listen(port, console.log(`Listening on port... ${port}`));



