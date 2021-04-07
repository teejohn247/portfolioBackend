import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Portfolio from '../model/Portfolio';
import Category from '../model/Category';



dotenv.config();




const portfolio = async (req, res) => {

    try{ 
        const {images, title, description,link,category} = req.body;
        const cat = await Category.findOne({_id: category})

        console.log(cat)

        const {categoryName}= cat


     
        let portfolio = new Portfolio({
            images, 
            title, 
            description,
            link,
            category,
            categoryName

        });
        console.log(portfolio);

        await portfolio.save();
        
        res.status(200).json({
             status:200,
             portfolio
        })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}

export default portfolio;
