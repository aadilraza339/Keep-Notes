var express = require('express');
var app = express()
app.use(express.json())
app.use('/', express = express.Router());
require('./router/note')(express)


app.listen(8000,()=>{
    console.log('working..')
})


