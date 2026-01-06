import mongoose from 'mongoose';

const videoResourceSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    channelName: { type: String },
    duration: { type: String },
    difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

const VideoResource = mongoose.model('VideoResource', videoResourceSchema);

export default VideoResource;

