export default function CareerSection({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => (
        <div
          key={item._id}
          className="bg-slate-800 border border-slate-700 rounded-xl p-6
                     hover:border-blue-500 transition"
        >
          <h3 className="text-lg font-semibold text-white mb-2">
            {item.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {item.description}
          </p>

          {item.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
