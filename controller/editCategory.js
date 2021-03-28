import Category from '../model/Category';



const editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryName } = req.body;


        const category = await Category.findOne({_id: id});
        if(!category){
            res.status(404).json({
                status:404,
                msg:'No link Found'
            })
            return
        }
        category.updateOne({ categoryName: categoryName }, category).then(
            () => {
              res.status(200).json({
                status:200,
                category
              });
            }
          )     
    }
    catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
};

export default editCategory;
