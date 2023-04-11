const mongoose = require("mongoose");

const DiscountSchema = new mongoose.Schema({
  dicsountCode: {
    type: Number,
    required: true,
    unique: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
  },
},{timestamps:true});

mongoose.models = {}
export default mongoose.model("Discount", DiscountSchema);
