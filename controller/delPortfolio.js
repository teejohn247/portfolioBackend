import dotenv from 'dotenv';
import Portfolio from '../model/Portfolio';

const deletePortfolio = async(req, res) => {
    try{
        console.log(req.params.cat_id);
        await Portfolio.findOneAndUpdate({ category: req.params.cat_id }, { $pull: { items: { _id: req.params.portfolio_id } } },

        function (
          err,
          result
        ) {
          if (err) {
            console.log(err)
            //   res.send(err);
          } else {
            res.status(200).json({
            status:200,
            msg:'Portfolio Deleted'
        })
          }
        });
       
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}
export default deletePortfolio;