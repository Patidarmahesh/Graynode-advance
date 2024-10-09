const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    location: {
      type: String,
    },
    product: {
      type: String,
    },
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    select: {
        type: String,
    },
    category: {
        type: String,
    },
    description: {
        type: String,
    },
    productBy: {
      type: mongoose.Types.ObjectId,
      ref:"company"
    },
  },
  { timestamps: true }
);

const CreateProductModel = mongoose.model("product", productSchema);
module.exports = CreateProductModel;
