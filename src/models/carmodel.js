import mongoose from "mongoose";
const { Schema } = mongoose;

const carSchema = new Schema(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    city: { type: String, required: true },
    year: { type: String, required: true },
    price: { type: String, required: true },
    mileage: { type: String, required: true },
    transmission: { type: String, required: true },
    fuelType: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: Array, required: true },
    location: { type: Object, required: true },
  },
  { timestamps: true }
);

const carmodel =
  mongoose.models.cardatax || mongoose.model("cardatax", carSchema);

export default carmodel;
