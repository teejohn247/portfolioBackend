
import dotenv from 'dotenv';
import Education from '../model/Education';

const delEducation = async(req, res) => {
    try{
        console.log(req.params.id);
        // const admin = await Admin.findById(req.params._id);
        // console.log(admin)
        await Education.deleteOne({ _id: req.params.id});
        res.status(200).json({
            status:200,
            msg:'Education Deleted'
        })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}
export default delEducation;