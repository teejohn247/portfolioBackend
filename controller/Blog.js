import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Blog from '../model/Blog';


dotenv.config();




const blog = async (req, res) => {

    try{ 
        const { blogLink } = req.body;
     
        let blog = new Blog({
           blogLink
        });
        console.log(blog);

        await blog.save();
        
        res.status(200).json({
             status:200,
             blog
        })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}

export default blog;
