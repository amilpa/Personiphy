import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  extroversion: {
    type: Number,
    required: true,
  },
  neurotic: {
    type: Number,
    required: true,
  },
  agreeable: {
    type: Number,
    required: true,
  },
  conscientious: {
    type: Number,
    required: true,
  },
  open: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Result || mongoose.model("Result", resultSchema);
