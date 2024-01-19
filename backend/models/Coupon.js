const mongoose = require("mongoose")
const CouponSchema = mongoose.Schema(
    {
        code:{type: String, required: true},// Kodi i kuponit
        discountPercent:{type: Number, required: true},   
        // Perqindja e zbritjes
    },
    {timestamps:true}
)

const Coupon = mongoose.model("Coupon", CouponSchema);
module.exports = Coupon;