const { Client } = require('pg'); 

const db = new Client({ 
  user: "gladysbenitez",
  host: "localhost", 
  database: "Fashova",
  // port: 3002,
  // password: "password"
});

db.connect();

const getCurrentItem =(id,cb)=>{
  console.log('this is the idddddd',id)
  db.query(`SELECT * FROM products WHERE id=${id}`, (err,results) => {
    if(err){
      cb(err,null)
    } else {
      cb(null,results)
    }
  })
}

module.exports.getCurrentItem = getCurrentItem;