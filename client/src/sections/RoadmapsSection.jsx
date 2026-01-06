import VideoList from '../components/VideoList';

export default function RoadmapsSection({ data }) {
  return (
    <div className="space-y-8">
      {data.map((roadmap) => (
        <div
          key={roadmap._id}
          className="bg-slate-800 border border-slate-700 rounded-xl p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            {roadmap.title}
          </h2>
          <p className="text-slate-400 mb-6">
            {roadmap.description}
          </p>

          <div className="space-y-4">
            {roadmap.steps?.map((step, idx) => (
              <div
                key={step._id}
                className="border-l-2 border-blue-500 pl-4"
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-6 h-6 rounded-full bg-blue-600
                                   flex items-center justify-center
                                   text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  <h4 className="text-white font-semibold">
                    {step.title}
                  </h4>
                </div>

                <p className="text-slate-400 text-sm mb-2">
                  {step.description}
                </p>

                {step.videoIds?.length > 0 && (
                  <VideoList videoIds={step.videoIds} compact />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
