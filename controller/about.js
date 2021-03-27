import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import About from '../model/About';


dotenv.config();




const about = async (req, res) => {

    try{ 
        const {description} = req.body;
     
        let about = new About({
           description
        });
        console.log(about);

        await about.save();
        
        res.status(200).json({
             status:200,
             about
        })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}

export default about;
