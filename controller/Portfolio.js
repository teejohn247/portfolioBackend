import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import Portfolio from '../model/Portfolio';
import Category from '../model/Category';



dotenv.config();




const portfolio = async (req, res) => {

    try {
        const { images, title, description, link, category } = req.body;
        const cat = await Category.findOne({ _id: category })
        const port = await Portfolio.findOne({ category: category })

        if (!category || !cat) {
            res.status(400).json({
                status: 400,
                err: 'category is required'
            })

        }


        console.log(cat)

        const { categoryName } = cat


        if (!port) {
            let portfolio = new Portfolio({
                // images, 
                // title, 
                // description,
                // link,
                category,
                categoryName
            });
            console.log(portfolio);
            await portfolio.save();
            await Portfolio.findOneAndUpdate({ category: category }, { $addToSet: { items: { description: description, title: title, link: link, images: images } } },
                { upsert: true, new: true },
                function (
                    err,
                    portfolios
                ) {
                    if (err) {
                        console.log(err)
                    } else {
                        //  let portfolios =  Portfolio.findOne({category: category})
                        res.status(200).json({
                            status: 200,
                            portfolios
                        })
                    }
                })

        } else {

            await Portfolio.findOneAndUpdate({ category: category }, { $addToSet: { items: { description: description, title: title, link: link, images: images } } },
                { upsert: true, new: true },
                function (
                    err,
                    portfolios
                ) {
                    if (err) {
                        console.log(err)
                    } else {
                        //  let portfolios =  Portfolio.findOne({category: category})
                        res.status(200).json({
                            status: 200,
                            portfolios
                        })
                    }
                })
            }

        } catch (err) {
            res.status(500).json({
                status: 500,
                err: 'server error'
            })
        }
    }

export default portfolio;
