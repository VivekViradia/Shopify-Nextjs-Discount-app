import Collection from "../../models/collection.js";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  // if (req.method == "POST") {
  //     for (let i = 0; i < req.body.length; i++){
  //         console.log("IIIIIIIII",i)
  //         let newCollection = new Collection({
  //             collectionName: req.body[i].collectionName,
  //             collectionProducts: req.body[i].collectionProducts
  //         })
  //         await newCollection.save()
  //     }
  //     res.status(200).json({success:"Collection Added"})
  // } else {
  // }

  const collection = new Collection({
    collectionName: req.body.collectionName,
    products: req.body.products,
  });

  try {
    const savedcollection = await collection.save();

    res.send(savedcollection);
  } catch (error) {
    res.status(400).send(error);
  }
  //   let collections = await Collection.find({});
  //   res.status(200).json({ collections });
};

export default connectDb(handler);
