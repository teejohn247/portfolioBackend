import mongoose from 'mongoose';

const ServicesSchema = new mongoose.Schema({
    // mages, title, description,link,category
    images:{
        type:Array,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    link:{
        type:String,
    },
    category:{
        type:String,
    },
});

const Services = mongoose.model("services", ServicesSchema);
export default Services;
