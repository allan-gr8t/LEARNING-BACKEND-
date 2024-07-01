const Product = require("../models/product.model");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
    console.log(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

///////////////////////////////////////////////////////////////
const getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id)
      return res.status(404).json({
        message: "Product Id not found",
      });

    const products = await Product.findById(id);
    res.status(200).json(products);
    // console.log(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//////////////////////////////////////////////////////////////////
const createAProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
///////////////////////////////////////////////////////////////////////
const updateAProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id)
      return res.status(404).json({
        message: "Product Id not found",
      });

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product)
      return res.status(404).json({
        message: "Product not found",
      });

    return res.status(200).json({
      message: "Product Updated",
      product: product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
////////////////////////////////////////////////////////////////////////
const deleteAProduct = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id)
      return res.status(404).json({
        message: "Product Id not found",
      });

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "product not found!" });
    }

    return res.status(200).json({ message: "product deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
////////////////////////////////////////////////////////////////////////////
// then export the code
module.exports = {
  getAllProducts,
  getSingleProduct,
  createAProduct,
  updateAProduct,
  deleteAProduct,
};
