import Services from '../model/Services';



const editServices = async (req, res) => {
  try {
    const { id } = req.params;
    console.log({id})
    const {service, description} = req.body;

        const services = await Services.findOne({_id: id});
        console.log({services})
        if(!services){
            res.status(404).json({
                status:404,
                msg:'No service Found'
            })
            return
        }
        services.updateOne({ service: service, description: description}, services).then(
            () => {
              res.status(200).json({
                status:200,
                service,
                description
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
