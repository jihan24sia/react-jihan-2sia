import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-500 via-fuchsia-600 to-emerald-500 p-10">
            <h1 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
                JavaScript Frameworks
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {frameworkData.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-white shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
                    >
                        {/* Glow gradient */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/30 to-emerald-400/30 opacity-0 hover:opacity-100 transition"></div>

                        <div className="relative z-10">
                            {/* Title */}
                            <h2 className="text-xl font-bold mb-2">
                                {item.name}
                            </h2>

                            {/* Description */}
                            <p className="text-sm text-white/80 mb-3">
                                {item.description}
                            </p>

                            {/* Developer */}
                            <p className="text-xs text-white/70 mb-2">
                                Develoved by :{" "}
                                <span className="font-semibold text-white">
                                    {item?.details?.developer}
                                </span>{" "}
                                ({item?.details?.releaseYear})
                            </p>

                            {/* Website */}
                            <a
                                href={item?.details?.officialWebsite}
                                target="_blank"
                                className="flex items-center justify-between bg-gradient-to-r from-pink-500 to-emerald-500 p-3 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition duration-300 mb-3"
                            >
                                <span className="text-sm font-semibold text-white">
                                    🌐 Visit Website
                                </span>
                                <span className="text-white text-lg">→</span>
                            </a>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {item?.tags?.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-gradient-to-r from-pink-400 to-emerald-400 text-white px-3 py-1 text-xs rounded-full shadow-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}