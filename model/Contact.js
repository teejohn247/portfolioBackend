import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    // name, email, phone,  IGlink, twitterLink, facebookLink
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    IGlink:{
        type:String,
    },
    twitterLink:{
        type:String,
    },
    facebookLink:{
        type:String,
    },
    phone:{
        type:String,
    },
    message:{
        type:String,
    },
});

const Contact = mongoose.model("contactPortfolio", ContactSchema);
export default Contact;
