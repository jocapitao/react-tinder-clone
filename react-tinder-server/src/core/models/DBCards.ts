import { model, Schema } from "mongoose";

const cardSchema = new Schema({
  name: String,
  imageUrl: String,
});

export default model("Cards", cardSchema);
