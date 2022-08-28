const express = require("express");

const Product = require("../models/product.model");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.post("/", authenticate, async (req, res) => {
  try {
    const user = req.user;

    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      image_urls: ["www.google.com"],
      user: user.user._id,
    });

    return res.status(201).json({ product });
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/", async (req, res) => {

try{
  const products = await Product.find().lean().exec();
  return res.send(products);

} catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }

});

router.patch("/:id", authenticate, async(req,res)=>{
try{
  const product= await Product.findByIdAndUpdate(req,params.id, req.body, {new: true})

  res.status(201).send(product)

 } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
})

router.delete("/:id", authenticate, async(req, res)=>{

  try{
    const product= await Product.findByIdAndDelete(req.params.id).lean().exec()
    
    res.status(201).send(product)

  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
})
module.exports = router;
