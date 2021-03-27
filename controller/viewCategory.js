import Category from '../model/Category';

const viewCategory = async(req, res) => {
    // const { page, limit } = req.body;
    // let page = req.params.page;
    // let limit = req.params.limit;
    try{
        const categories = await Category.find()
        // .sort({date: -1})
        // .limit(limit * 1)
        // .skip((page - 1) * limit)
        // .exec();
        // console.log({adminrecords})

        // const count = await Booking.find().countDocuments();
        // console.log(count)
        if(!categories){
            res.status(404).json({
                status:404,
                error:'no record available'
            })
        }
        res.status(200).json({
            status:200,
            categories,
            // totalPages: Math.ceil(count / limit),
            // currentPage: page
        })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}
export default viewCategory;
