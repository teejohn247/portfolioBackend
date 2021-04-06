import  Contact from '../model/Contact';

const viewContact = async(req, res) => {
    // const { page, limit } = req.body;
    // let page = req.params.page;
    // let limit = req.params.limit;
    try{
        const contacts = await Contact.find()
         console.log(contacts[0])
         let contact = contacts[0]
        if(!contacts){
            res.status(404).json({
                status:404,
                error:'no record available'
            })
        }
        res.status(200).json({
            status:200,
            contact
            // contacts,
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
export default viewContact;
