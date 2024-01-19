const express = require("express");
const router = express.Router();
const Coupon = require("../models/Coupon.js");

// Get new Coupons
router.post("/", async (req, res) => {
  try {
    const { code } = req.body;
    const existingCoupon = await Coupon.findOne({ code });
    if (existingCoupon) {
      return res.status(400).send({ error: "Coupon code already exists." });
    }
    const newCoupon = new Coupon(req.body);
    await newCoupon.save();

    res.status(201).json(newCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// Gjitha Kuponat (Read All)
router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find();

    res.status(200).json(coupons);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

//vetem nje kupon te caktuar (Read-Single by Coupon ID)
router.get("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;

    const coupon = await Coupon.findById(couponId);
    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found" });
    }

    res.status(200).json(coupon);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

//vetem nje kupon te caktuar (Read-Single by Coupon Code)
router.get("/code/:couponCode", async (req, res) => {
  try {
    const couponCode = req.params.couponCode;

    const coupon = await Coupon.findOne({ code: couponCode });
    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found" });
    }
    const { discountPercent } = coupon;

    res.status(200).json({ discountPercent });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Update Coupon (Update)
router.put("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;
    const updates = req.body;

    const existingCoupon = await Coupon.findById(couponId);
    if (!existingCoupon) {
      return res.status(404).json({ error: "Coupon not found." });
    }

    const updateCoupon = await Coupon.findByIdAndUpdate(couponId, updates, {
      new: true,
    });
    res.status(200).json(updateCoupon);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error." });
  }
});

//Fshij Kuponin (Delete)
router.delete("/:couponId", async (req, res) => {
  try {
    const couponId = req.params.couponId;

    const deleteCoupon = await Coupon.findByIdAndDelete(couponId);
    if (!deleteCoupon) {
      return res.status(404).json({ error: "Coupon not found." });
    }
    res.status(200).json(deleteCoupon);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Failed to Delete." });
  }
});

module.exports = router;
