import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Education from '../model/Education';


dotenv.config();




const education = async (req, res) => {
  
    try{ 
        const {school, year, duration, description} = req.body;
     
        let education = new Education({
            school,
             year,
             duration,
             description
        });
        console.log(education);

        await education.save();
        
        res.status(200).json({
             status:200,
             education
        })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}

export default education;
