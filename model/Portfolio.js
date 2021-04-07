import mongoose from 'mongoose';

const PortfolioSchema = new mongoose.Schema({
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
    categoryName:{
        type:String,
    },
});

const Portfolio = mongoose.model("portfolio", PortfolioSchema);
export default Portfolio;
