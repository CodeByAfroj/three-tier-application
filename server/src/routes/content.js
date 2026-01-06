import express from 'express';
import Career from '../models/Career.js';
import Roadmap from '../models/Roadmap.js';
import VideoResource from '../models/VideoResource.js';
import DocResource from '../models/DocResource.js';
import LinkResource from '../models/LinkResource.js';
import NewsResource from '../models/NewsResource.js';

const router = express.Router();

// Shared search helper function
const searchData = async (Model, searchTerm) => {
  if (!searchTerm) return Model.find({});
  
  const search = searchTerm.toLowerCase();
  return Model.find({
    $or: [
      { title: { $regex: new RegExp(search, 'i') } },
      { description: { $regex: new RegExp(search, 'i') } },
      { tags: { $in: [new RegExp(search, 'i')] } },
    ],
  });
};

// GET /api/careers
router.get('/careers', async (req, res) => {
  const filtered = await searchData(Career, req.query.search);
  res.json(filtered);
});

// GET /api/roadmaps
router.get('/roadmaps', async (req, res) => {
  const filtered = await searchData(Roadmap, req.query.search);
  res.json(filtered);
});

// GET /api/videos
router.get('/videos', async (req, res) => {
  const filtered = await searchData(VideoResource, req.query.search);
  res.json(filtered);
});

// GET /api/docs
router.get('/docs', async (req, res) => {
  const filtered = await searchData(DocResource, req.query.search);
  res.json(filtered);
});

// GET /api/links
router.get('/links', async (req, res) => {
  const filtered = await searchData(LinkResource, req.query.search);
  res.json(filtered);
});

// GET /api/news
router.get('/news', async (req, res) => {
  const filtered = await searchData(NewsResource, req.query.search);
  res.json(filtered);
});

export default router;
