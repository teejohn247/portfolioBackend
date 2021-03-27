import Services from '../model/Services';



const editServices = async (req, res) => {
  try {
    const { id } = req.params;
    const {images, title, description,link,category} = req.body;

        const service = await Services.findOne({_id: id});
        if(!service){
            res.status(404).json({
                status:404,
                msg:'No service Found'
            })
            return
        }
        service.updateOne({ images: images, title: title, description: description,link: link,category: category}, service).then(
            () => {
              res.status(200).json({
                status:200,
                images, 
                title, 
                description,
                link,
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

export default editServices;
