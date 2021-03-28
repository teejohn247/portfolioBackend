import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Services from '../model/Services';


dotenv.config();




const services = async (req, res) => {

  
    try{ 
        const {} = req.body;
     
        let services = new Services({
            service, 
            description
        });
        console.log(services);

        await services.save();
        
        res.status(200).json({
             status:200,
             services
        })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}

export default services;
