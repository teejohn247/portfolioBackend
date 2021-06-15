import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Contact from '../model/Feedback';

  
var nodemailer = require('nodemailer');



dotenv.config();




const feedBack = async (req, res) => {

    try{ 
        const {name, message, email} = req.body;
     
        let contact = new Contact({
            name, 
            message,
            email
        });
        console.log(contact);

        await contact.save();

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'nonsoriby@gmail.com',
              pass: 'nonsoikenwa'
            }
          });
          
          var mailOptions = {
            from: 'nonsoriby@gmail.com',
            to: `${email}`,
            subject: 'Email Notification',
            text:`
            Name:${name}, 
            Email Address: ${email},
            Message: ${message}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        
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

export default feedBack;
