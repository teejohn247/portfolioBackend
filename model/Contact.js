import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    // name, email, phone,  IGlink, twitterLink, facebookLink
    field_id:{
        type:Number,
        default: 1
    },
    name:{
        type:String,
        // default: "John Doe"
        // required:true
    },
    description:{
        type:String,
        // default: "description"
    },
    email:{
        type:String,
        // default: "johndoe@gmail.com"

        // required:true,
    },
    IGlink:{
        type:String,
        // default: "johndoe@gmail.com"

    },
    twitterLink:{
        type:String,
        // default: "johndoe@gmail.com"

    },
    facebookLink:{
        type:String,
        // default: "johndoe@gmail.com"

    },
    phone:{
        type:String,
        // default: "0909292929292"

    },
    message:{
        type:String,
        // default: "message"

    },
});

const Contact = mongoose.model("contactPortfolio", ContactSchema);
export default Contact;
