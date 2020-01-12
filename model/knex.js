const Knex = require('./connection')


let insert_data = (add_notes)=>{  
   return Knex('user')
    .insert(add_notes)

}  

let search = (title)=>{
    check = "%" + title + "%";
    return Knex('user')
    .select('*')
    .where('user.title','like', check)
}

let update = (edit_notes,title)=>{
    check = "%" + title + "%";
    return  Knex('user')
    .update(edit_notes)
    .where('user.title','like',check)
}

let del = (remove)=>{
    return Knex('user')
    .del()
    .where('user.id' ,remove)
}

let notes = ()=>{
    return Knex('user')
    .select('*')

}

let timer = ()=>{
    return Knex('user')
    .select('reminder','title')
    .orderBy('reminder')

}

module.exports = {insert_data, search, update, del, notes, timer}



