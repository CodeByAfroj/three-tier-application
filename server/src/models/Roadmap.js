import mongoose from 'mongoose';
import roadmapStepSchema from './RoadmapStep.js';
const roadmapSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    tags: [{ type: String }],
    steps: [roadmapStepSchema], // Embedded roadmap steps
  },
  { timestamps: true }
);

const Roadmap = mongoose.model('Roadmap', roadmapSchema);

export default Roadmap;

