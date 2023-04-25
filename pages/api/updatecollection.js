// Update product
import Collection from "../../models/collection.js";


const product_update = async (req, res) => {
  try {
    const product = {
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
      details: req.body.details,
    };
    const updatedProduct = await Collection.findByIdAndUpdate(
      { _id: req.params.productId },
      product
    );
    res.json(updatedProduct);
  } catch (error) {
    res.json({ message: error });
  }
};
