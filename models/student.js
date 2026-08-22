const mongoose=require("mongoose");
const student=studentSchema({
    name:{
        type:"string",
        require
    },
    email:{
        type:"email",
        require
    },
    district:{
        type:"string",
        require
    },
    pincode:{
        type:"number",
        require
    },
    state:{
        type:"string",
        require
    },
    gender:{
        type:"string",
        require
    }

})
const studentSchema=mongoose.model("newstudent",student);
module.exports=student;
