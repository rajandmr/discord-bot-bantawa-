const Mongoose = require('mongoose');

Mongoose.connect(`${process.env.MONGODB_URI}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db=>{
    console.log('db connected')
}).catch(e=>console.log('db connection failure'))