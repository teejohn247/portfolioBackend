import mongoose from 'mongoose';

const EducationSchema = new mongoose.Schema({
   
    school:{
        type:String,
        // required:true,
    },
    year:{
        type:String,
    },
    start:{
        type:String,
    },
    end:{
        type:String,
    },
    description:{
        type:String,
    },
});

const Education = mongoose.model("education", EducationSchema);
export default Education;
