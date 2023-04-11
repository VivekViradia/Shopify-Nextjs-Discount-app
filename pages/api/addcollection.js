import Collection from "../../models/collection.js"
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method == "POST") {
        for (let i = 0; i < req.body.length; i++){
            
            let newCollection = new Collection({
                collectionName: req.body[i].collectionName
            })
            await newCollection.save()
        }
        res.status(200).json({success:"Collection Added"})
    } else {
    }


//   let collections = await Collection.find({});
//   res.status(200).json({ collections });
};

export default connectDb(handler);
