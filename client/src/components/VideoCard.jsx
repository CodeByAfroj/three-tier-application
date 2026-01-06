import { useState } from "react";

const getYouTubeId = (url = "") => {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/
  );
  return match ? match[1] : null;
};

const VideoCard = ({ video, compact = false }) => {
  if (!video?.url) return null;

  const videoId = getYouTubeId(video.url);
  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : "";

  const [open, setOpen] = useState(false);

  // Compact mode for roadmap previews
  if (compact) {
    return (
      <>
        <div
          onClick={() => setOpen(true)}
          className="group inline-block w-48 cursor-pointer"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-800">
            {thumbnail && (
              <img
                src={thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 p-2 rounded-full text-xs">▶</div>
            </div>
            {video.duration && (
              <span className="absolute bottom-1 right-1 bg-black/90 text-white text-[10px] px-1 py-0.5 rounded">
                {video.duration}
              </span>
            )}
          </div>
          <div className="mt-2">
            <h4 className="text-white text-xs font-medium line-clamp-2">
              {video.title}
            </h4>
            <p className="text-slate-400 text-[10px]">{video.channelName}</p>
          </div>
        </div>

        {open && videoId && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg">
              <button
                onClick={() => setOpen(false)}
                className="absolute -top-10 right-0 text-white hover:text-slate-300"
              >
                ✕ Close
              </button>
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={video.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </>
    );
  }

  // Normal mode
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="group block cursor-pointer"
      >
        <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800">
          {thumbnail && (
            <img
              src={thumbnail}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/60 p-4 rounded-full">▶</div>
          </div>
          {video.duration && (
            <span className="absolute bottom-2 right-2 bg-black/90 text-white text-[11px] px-1.5 py-0.5 rounded">
              {video.duration}
            </span>
          )}
        </div>
        <div className="mt-3 space-y-1">
          <h4 className="text-white text-sm font-medium line-clamp-2">
            {video.title}
          </h4>
          <p className="text-slate-400 text-xs">{video.channelName}</p>
          <div className="text-slate-500 text-xs">
            {video.difficulty} • YouTube
          </div>
        </div>
      </div>

      {open && videoId && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-slate-300"
            >
              ✕ Close
            </button>
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={video.title}
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
