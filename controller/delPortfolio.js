import dotenv from 'dotenv';
import Portfolio from '../model/Portfolio';

const deletePortfolio = async(req, res) => {
    try{
        console.log(req.params.id);
        // const admin = await Admin.findById(req.params._id);
        // console.log(admin)
        await Portfolio.findByIdAndDelete(req.params.id);
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
export default deletePortfolio;