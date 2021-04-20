import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema({
    // PlaceOfWork, duration, description)
    PlaceOfWork:{
        type:String,
        required:true,
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

const Experience = mongoose.model("experience", ExperienceSchema);
export default Experience;
