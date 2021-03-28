import Experience from '../model/Experience';



const editExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const {PlaceOfWork, duration, description} = req.body;


        const experience = await Experience.findOne({_id: id});

        if(!experience){
            res.status(404).json({
                status:404,
                msg:'No link Found'
            })
            return
        }
        experience.updateOne({ PlaceOfWork: PlaceOfWork, duration: duration, description: description }, experience).then(
            () => {
              res.status(200).json({
                status:200,
                experience
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

export default editExperience;
