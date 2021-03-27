import dotenv from 'dotenv';
import Category from '../model/Category';

const deleteCategory = async(req, res) => {
    try{
        console.log(req.params._id);
        // const admin = await Admin.findById(req.params._id);
        // console.log(admin)
        await Category.deleteOne({ _id: req.params.id});
        res.status(200).json({
            status:200,
            msg:'Category Deleted'
        })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}
export default deleteCategory;