export default function NewsSection({ data }) {
  return (
    <div className="space-y-4">
      {data.map((news) => (
        <a
          key={news._id}
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-slate-800 border border-slate-700
                     rounded-xl p-6 hover:border-blue-500 transition"
        >
          <h3 className="text-white font-semibold mb-1">
            {news.title}
          </h3>
          <p className="text-slate-400 text-sm">
            {news.description}
          </p>
        </a>
      ))}
    </div>
  );
}
