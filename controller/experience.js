import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Experience from '../model/Experience';


dotenv.config();




const experience = async (req, res) => {
  
    try{ 
        
        const {PlaceOfWork, duration, description} = req.body;
     
        let experience = new Experience({
            PlaceOfWork, 
            duration, 
            description
        });
        console.log(experience);

        await experience.save();
        
        res.status(200).json({
             status:200,
             experience
        })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}

export default experience;
