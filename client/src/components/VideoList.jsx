import { useState, useEffect } from 'react';
import api from '../api/axios';
import VideoCard from './VideoCard';

const VideoList = ({ videoIds, compact = false }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await api.get('/videos');
        const allVideos = res.data;
        const filtered = allVideos.filter(v => videoIds.includes(v.id));
        setVideos(filtered);
      } catch (err) {
        console.error('Error fetching videos:', err);
      }
    };
    if (videoIds && videoIds.length > 0) {
      fetchVideos();
    }
  }, [videoIds]);

  if (videos.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} compact={compact} />
      ))}
    </div>
  );
};

export default VideoList;

