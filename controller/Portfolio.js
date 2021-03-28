import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Portfolio from '../model/Portfolio';


dotenv.config();




const portfolio = async (req, res) => {

    try{ 
        const {images, title, description,link,category} = req.body;
     
        let portfolio = new Portfolio({
            images, 
            title, 
            description,
            link,
            category
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
