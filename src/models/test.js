import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  results: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Result",
    },
  ],
});

export default mongoose.models.Test || mongoose.model("Test", testSchema);
