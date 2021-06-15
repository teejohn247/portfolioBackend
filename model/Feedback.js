import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
    name:{
        type:String,
        // default: "John Doe"
        // required:true
    },
    message:{
        type:String,
        // default: "description"
    },
    email:{
        type:String,
        // default: "johndoe@gmail.com"
        // required:true,
    },
  
});

const Feedback = mongoose.model("feedback", FeedbackSchema);
export default Feedback;
