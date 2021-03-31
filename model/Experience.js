import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema({
    // PlaceOfWork, duration, description)
    PlaceOfWork:{
        type:String,
        required:true,
    },
    duration:{
        type:String,
    },
    description:{
        type:String,
    },
});

const Experience = mongoose.model("experience", ExperienceSchema);
export default Experience;
