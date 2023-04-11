import Collection from "../../models/collection.js"
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  let collections = await Collection.find({});
  res.status(200).json({ collections });
};

export default connectDb(handler);
