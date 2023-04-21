import Collection from "../../models/collection.js";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {


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
};

export default connectDb(handler);
