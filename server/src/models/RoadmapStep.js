import mongoose from 'mongoose';

const roadmapStepSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoIds: [{ type: String }],
  },
  { timestamps: true }
);

export default roadmapStepSchema;
