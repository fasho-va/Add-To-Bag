const { Client } = require('pg'); 

const db = new Client({ 
  user: "gladysbenitez",
  host: "database-1.cyze98osa6ns.us-east-2.rds.amazonaws.com", 
  database: "Fashova",
  port: 5432,
  password: "password"
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