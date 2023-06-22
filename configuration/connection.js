//importing mongoose library
const mongoose = require('mongoose');
//connecting to mongodb database using uri 
mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/socialNetwork',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

//exporting cnnection to the database
module.exports = mongoose.connection