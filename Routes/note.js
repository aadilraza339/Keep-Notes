var knex = require ('../model/knex')
var schedule = require('node-schedule');

var sleep = require('system-sleep');

let date_ob = new Date();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
module.exports = (app)=>{

    var tim = function (req, res, next) {
        knex.timer()
        .then((data)=>{
            var list = [];
           for (i in data){
            var check=(data[i]['reminder']);
            var title=(data[i]['title']);
            if(check!=null){
              sleep(check*3600000)
              console.log(check,title);
              
            }    
           }
         
        
        
        
            
        })
        .catch((err)=>{
            res.send(err)   
        })
        next()
      }
    app.use(tim)

    app.post('/add',(req,res)=>{
        let add_notes = {'title':req.body.title, 'NOTES':req.body.NOTES, 'published_on': new Date(),
        'reminder': req.body.reminder}
        knex.insert_data(add_notes)
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        }) 
    })

    app.get('/search/:id',(req,res)=>{
    var send = req.params.id
     knex.search(send)
     .then((data)=>{
         res.send(data)
     })
     .catch((err)=>{
         res.send(err)
     })
    })

    app.put('/edit_notes/:title',(req,res)=>{
        let edit_note = {'title':req.body.title, 'NOTES':req.body.NOTES, 'published_on': new Date(),
        'reminder': req.body.reminder}
        var name = req.params.title
        knex.update(edit_note ,name)
        .then((data)=>{
            res.json("update")   
        })
        .catch((err)=>{
            res.send(err)
        })
        
    })

    app.delete('/remove/:title',(req,res)=>{
        var remove = req.params.title
        knex.del(remove)
        .then(()=>{
            res.json('delete..')   
        })
        .catch((err)=>{
            res.send(err)
        })
    })
    
    app.get('/notes',(req,res)=>{
        knex.notes()
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.send(err)
        })
    })
  
      

     
}   

const array1 = [1, 4, 9, 16,89];








// current seconds
// let seconds = date_ob.getSeconds();
// console.log();

 


// CREATE TABLE IF NOT EXISTS user (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255),
//     NOTES MEDIUMTEXT,
//     published_on  DATE,
//     reminder INT
// ); 