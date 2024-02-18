const mongoose = require("mongoose");

const DB = "mongodb+srv://vicky:vickydata@cluster0.kxodm.mongodb.net/storedata?retryWrites=true&w=majority";

mongoose.connect(DB, {
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology:true
}).then(() => {
    console.log("connection successful");
}).catch((e) => {
    console.log("connection failing");
});