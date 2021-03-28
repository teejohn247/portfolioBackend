import dotenv from 'dotenv';
import Services from '../model/Services';

const deleteService = async(req, res) => {
    try{
        console.log(req.params.id);
        await Services.deleteOne({ _id: req.params.id});
        res.status(200).json({
            status:200,
            msg:'Portfolio Deleted'
        })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}
export default deleteService;