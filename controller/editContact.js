import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Contact from '../model/Contact';


dotenv.config();




const editContact = async (req, res) => {

    try{ 

        const {name, description, email, phone,  IGlink, twitterLink, facebookLink} = req.body;

        const contact = await Contact.findOne({field_id: 1});

        if(!contact){
            res.status(404).json({
                status:404,
                msg:'No contact Found'
            })
            return
        }
        contact.updateOne({ name, description, email, phone,  IGlink, twitterLink, facebookLink }, contact).then(
            () => {
              res.status(200).json({
                status:200,
                contact
              });
            }
          )     
        }
     
        // let contact = new Contact({
        //     name, 
        //     description,
        //     email, 
        //     phone,
        //     IGlink,
        //     twitterLink,
        //     facebookLink
        // });
        // console.log(contact);

        // await contact.save();
        
        // res.status(200).json({
        //      status:200,
        //      contact
        // })
    catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}

export default editContact;
