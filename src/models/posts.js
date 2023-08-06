import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new Schema(
  {
    name: String,
  },
  { timestamps: true }
);

const posts =
  mongoose.models.Postsnext || mongoose.model("Postsnext", postSchema);

export default posts;
