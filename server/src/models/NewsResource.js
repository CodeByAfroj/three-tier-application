import mongoose from 'mongoose';

const newsResourceSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

const NewsResource = mongoose.model('NewsResource', newsResourceSchema);

export default NewsResource;

