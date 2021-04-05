import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    field_id:{
        type:Number,
        default: 1
    },
    blogLink:{
        type:String,
        // default: "bloglink"
        // required:true
    },
});

const Blog = mongoose.model("blog", BlogSchema);
export default Blog;
