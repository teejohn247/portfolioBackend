import mongoose from 'mongoose';

const PortfolioSchema = new mongoose.Schema({

    category:{
        type:String,
        required: true
        
    },
    categoryName:{
        type:String,
    },
    items: [
        {
        description: {
          type: String,
        },
        title: {
            type: String,
        },
        link: {
            type: String,
        },
        images:{
            type:Array,
        },
      }
    ]
  
});

const Portfolio = mongoose.model("portfolio", PortfolioSchema);
export default Portfolio;
