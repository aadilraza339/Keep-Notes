
var knex = require('knex')({
  client:"mysql",
  connection:{
      user:"root",
      host:"localhost",
      password:"'",
      database:"notes"
  }
})



module.exports = knex;