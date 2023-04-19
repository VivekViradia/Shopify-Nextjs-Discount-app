const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema(
  {
    collectionName: {
      type: String,
      required: [true, "Must give name to a Collection"],
    },
    products: {
      type: [String],
      required: [true, "Must provide IDs of Products"],
    },
  },
  { timestamps: true }
);

mongoose.models = {};
const Collections = mongoose.model("Collection", CollectionSchema);

module.exports = Collections;
