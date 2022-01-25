const  mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/interview';
mongoose.connect(mongoDB, { useNewUrlParser: true ,useUnifiedTopology: true})
.then( () => console.log("connection successful..."))
.catch((err) => console.log(err));