const mongoose=require("mongoose");
const connectDB=async()=>{
    await mongoose.connect({
        "mongoose://127.0.0.1:27017//Student_registration"
        // console.log("mongoose is connected");
        
    });


}

module.exports=mongoose;