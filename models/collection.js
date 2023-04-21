const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema(
  {
    collectionName: {
      type: String,
      required: [true, "Must give name to a Collection"],
      unique:true
    },
    products: { type: [Number], required: [true, "Must add Products to Collection"], },
    discount: { type: Number, default:0 },
  },
  { timestamps: true }
);

mongoose.models = {};
const Collections = mongoose.model("Collection", CollectionSchema);

module.exports = Collections;
