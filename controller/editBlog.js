import Blog from '../model/Blog';



const editBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { blogLink } = req.body;

        const blog = await Blog.findOne({_id: id});
        if(!blog){
            res.status(404).json({
                status:404,
                msg:'No link Found'
            })
            return
        }
        blog.updateOne({ blogLink: blogLink }, blog).then(
            () => {
              res.status(200).json({
                status:200,
                blogLink
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

export default editBlog;
