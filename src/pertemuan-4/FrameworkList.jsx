import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8">
            {frameworkData.map((item) => (
                <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>

                    {/* Developer */}
                    <p className="text-sm  text-gray-600">
                        Developed by: <span className="font-semibold">{item?.details?.developer}</span>
                        ({item?.details?.releaseYear})
                    </p>

                    {/* Website */}
                    <a
                        href={item?.details?.officialWebsite}
                        target="_blank"
                        className="text-blue-500 underline"
                    >
                        Visit Website
                    </a>

                   
 {/* Tags */}
                    <div className="mt-2 flex gap-2 flex-wrap">
                        {item?.tags?.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 px-2 py-1 text-xs rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}