import mongoose from 'mongoose';

const linkResourceSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

const LinkResource = mongoose.model('LinkResource', linkResourceSchema);

export default LinkResource;

