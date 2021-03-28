import mongoose from 'mongoose';

const EducationSchema = new mongoose.Schema({
   
    school:{
        type:String,
        // required:true,
    },
    year:{
        type:String,
    },
    duration:{
        type:String,
    },
    description:{
        type:String,
    },
});

const Education = mongoose.model("education", EducationSchema);
export default Education;
