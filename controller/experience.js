import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Experience from '../model/Experience';


dotenv.config();




const experience = async (req, res) => {
  
    try{ 
        
        const {PlaceOfWork, description, start, end} = req.body;
        console.log(PlaceOfWork)
     
        let experience = new Experience({
            PlaceOfWork, 
            start,
            end, 
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
