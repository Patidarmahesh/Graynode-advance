const { imageUploadss } = require("../MiddleWare/imageUpload");
const CreateProductModel = require("../Models/productModal");
require("dotenv").config();
const Razorpay = require("razorpay");

const createProduct = async (req, res) => {
  imageUploadss(req, res, async (error) => {
    if (error) {
      return res.send({ message: error });
    }
    try {
      const response = await CreateProductModel.create({
        ...req.body,
        productBy: req.user,
        product: req.files?.product[0].filename,
      });
      if (response) {
        res.send({
          status: 200,
          error: false,
          message: "Create Product SuccessFully",
          success: true,
          response,
        });
      } else {
        res.send({
          status: 400,
          error: true,
          success: false,
          response,
        });
      }
    } catch (error) {
      res.send({
        status: 400,
        error: true,
        success: false,
        response: [],
        message: error.message,
      });
    }
  });
};

const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await CreateProductModel.findByIdAndDelete(id);
    if (response) {
      res.send({
        status: 200,
        error: false,
        message: "Delete Product SuccessFully",
        success: true,
        response,
      });
    } else {
      res.send({
        status: 400,
        error: true,
        success: false,
        response,
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      error: true,
      success: false,
      response: [],
      message: error.message,
    });
  }
};

const getAllProductController = async (req, res) => {
  try {
    const response = await CreateProductModel.find().populate("productBy");
    if (response) {
      res.send({
        status: 200,
        error: false,
        message: "Get All Product SuccessFully",
        success: true,
        response,
      });
    } else {
      res.send({
        status: 400,
        error: true,
        success: false,
        response,
      });
    }
  } catch (error) {
    res.send({
      status: 400,
      error: true,
      success: false,
      response: [],
      message: error.message,
    });
  }
};

const orderController = async (req, res) => {
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: 50000, // amount in smallest currency unit
      currency: "INR",
      receipt: "receipt_order_74394",
    };

    const response = await instance.CreateProductModel.create({
      options,
    });
    if (response) {
      return res.send({
        status: 200,
        error: false,
        message: "Order Is Saved",
        success: true,
        response,
      });
    } else {
      return res.send({
        status: 400,
        error: true,
        success: false,
        response,
      });
    }
  } catch (error) {
    return res.send({
      status: 400,
      error: true,
      success: false,
      response: [],
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  deleteProductController,
  getAllProductController,
  orderController,
};
