import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    categoryName:{
        type:String,
        required:true
    },
});

const Category = mongoose.model("categoryPortfolio", CategorySchema);
export default Category;
