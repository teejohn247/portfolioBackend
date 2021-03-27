import mongoose from 'mongoose';
import moment from 'moment';

const AboutSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
});

const About = mongoose.model("about", AboutSchema);
export default About;
