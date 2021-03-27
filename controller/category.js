import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Category from '../model/Category';


dotenv.config();




const category = async (req, res) => {

    try{ 
        const { categoryName } = req.body;
     
        let category = new Category({
           categoryName
        });
        console.log(category);

        await category.save();
        
        res.status(200).json({
             status:200,
             category
        })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}

export default category;
