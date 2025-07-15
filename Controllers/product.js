import { Product } from "../Models/Product.js";

// add Product
export const addProduct = async (req, res) => {
  try {
    let product = await Product.create(req.body);
    res.json({ message: "product added success..", product, success: true });
  } catch (e) {
    res.json(e.message);
  }
};

// get all product
export const getProduct = async (req, res) => {
  try {
    let products = await Product.find();
    if (!products)
      return res.json({
        message: "product not found",
        products,
        success: false,
      });
    res.json({ message: "Fetched all Products", products, success: true });
  } catch (e) {
    res.json(e.message);
  }
};

// get product by id
export const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    let products = await Product.findById(id);
    if (!products)
      return res.json({
        message: "Invalid Id",
        products,
        success: false,
      });
    res.json({ message: "fetched specific product", products, success: true });
  } catch (e) {
    res.json(e.message);
  }
};

// update product by id
export const updateProductById = async (req, res) => {
  const id = req.params.id;
  try {
    let products = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!products)
      return res.json({
        message: "Invalid Id",
        products,
        success: false,
      });
    res.json({ message: "product Success..", products, success: true });
  } catch (e) {
    res.json(e.message);
  }
};

// delete product by id
export const deleteProductById = async (req, res) => {
  const id = req.params.id;
  try {
    let products = await Product.findByIdAndDelete(id);
    if (!products)
      return res.json({
        message: "Invalid Id",
        products,
        success: false,
      });
    res.json({ message: "product deleted Success..", products, success: true });
  } catch (e) {
    res.json(e.message);
  }
};
