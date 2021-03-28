import mongoose from 'mongoose';

const ServicesSchema = new mongoose.Schema({
    // mages, title, description,link,category

    service:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
  
});

const Services = mongoose.model("services", ServicesSchema);
export default Services;
