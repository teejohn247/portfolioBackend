import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Contact from '../model/Contact';


dotenv.config();




const contact = async (req, res) => {

    try{ 
        const {name, description, email, phone,  IGlink, twitterLink, facebookLink} = req.body;
     
        let contact = new Contact({
            name, 
            description,
            email, 
            phone,
            IGlink,
            twitterLink,
            facebookLink
        });
        console.log(contact);

        await contact.save();
        
        res.status(200).json({
             status:200,
             contact
        })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}

export default contact;
