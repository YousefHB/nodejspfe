const mongoose = require('mongoose');
mongoose.set("useNewUrlParser",true);
mongoose.set("useUnifiedTopology",true);
mongoose.set("useFindAndModify",false);

class DataBase{
    constructor(){
            this.connect();
    }
    connect(){
       
        mongoose.connect("mongodb+srv://melekrekik90:QmF53YkcXT7Gu4AI@clusteryc.z025moq.mongodb.net/")
        .then(()=>{
           console.log("database connect suuccesfully" )
        })
        .catch((err)=>{
           console.log("DATABASE EURREUR"+err)
        })
    }
}
module.exports= new DataBase();