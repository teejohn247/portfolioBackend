import Education from '../model/Education';



const editEducation = async (req, res) => {
  try {
    const { id } = req.params;

    const {school, year, start, end, description} = req.body;

        const education = await Education.findOne({_id: id});

        if(!education){
            res.status(404).json({
                status:404,
                msg:'No link Found'
            })
            return
        }
        education.updateOne({ school: school, year: year, start: start, end: end, description: description }, education).then(
            () => {
              res.status(200).json({
                status:200,
                education
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

export default editEducation;
