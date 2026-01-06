import mongoose from 'mongoose';

const careerSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

const Career = mongoose.model('Career', careerSchema);

export default Career;

