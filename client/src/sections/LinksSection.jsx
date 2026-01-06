export default function LinksSection({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((link) => (
        <a
          key={link._id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 border border-slate-700
                     rounded-xl p-6 hover:border-blue-500 transition"
        >
          <h3 className="text-white font-semibold mb-1">
            {link.title}
          </h3>
          <p className="text-slate-400 text-sm">
            {link.description}
          </p>
        </a>
      ))}
    </div>
  );
}
