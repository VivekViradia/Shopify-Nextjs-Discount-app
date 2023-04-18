const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema(
  {
    collectionName: {
      type: String,
      required: [true,"Must give name to a Collection"],
    },
    products: {
      type:String
    }
  },
  { timestamps: true }
);

mongoose.models = {}
export default mongoose.model("Collection", CollectionSchema);
