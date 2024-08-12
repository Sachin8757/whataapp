const mongoose=require('mongoose');
main().then(()=>{
    console.log("connection successfull");
}).catch((err)=>console.log(err));
async function main() {
    await mongoose.connect("mongodb+srv://sachin:8757887103@shopdata.shpwbu2.mongodb.net/?retryWrites=true&w=majority&appName=whatapp");
    // await mongoose.connect("mongodb://127.0.0.1:27017/whatapp");
}

const user=new mongoose.Schema({
    name:{
        type:String
    },
    password:{
        type:String,
        require:true
    },
    // friends:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     // ref:"orders"
    
    //   }]

})
module.exports=mongoose.model("user",user);
