import mongoose from 'mongoose';

const docResourceSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

const DocResource = mongoose.model('DocResource', docResourceSchema);

export default DocResource;

