import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
    //deklarasi state untuk search term dan selected tag
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTag, setSelectedTag] = useState("");


    /*Inisialisasi DataForm*/
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
        /*Tambah state lain beserta default value*/
    });

    /*Inisialisasi Handle perubahan nilai input form*/
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };
    const _searchTerm = dataForm.searchTerm.toLowerCase();
    const _selectedTag = dataForm.selectedTag.toLowerCase();
    // FILTER LOGIC

    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.name
                .toLowerCase()
                .includes(_searchTerm) ||
            framework.description
                .toLowerCase()
                .includes(_searchTerm) ||
            framework.details.developer
                .toLowerCase()
                .includes(_searchTerm);

        const matchesTag = dataForm.selectedTag ? framework.tags.includes(dataForm.selectedTag) : true;
        ``
        return matchesSearch && matchesTag;
    });

    //deklarasi allTags untuk opsi filter tag
    const allTags = [
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-500 via-fuchsia-600 to-emerald-500 p-10">

            <h1 className="text-3xl font-bold text-white mb-6 text-center drop-shadow-lg">
                JavaScript Frameworks
            </h1>

            {/* 🔍 SEARCH + FILTER UI */}
            <div className="max-w-xl mx-auto mb-8 space-y-3">

                <input
                    type="text"
                    placeholder="🔍 Search framework..."
                    value={dataForm.searchTerm}
                    name="searchTerm"
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-white/20 backdrop-blur text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-300"

                />

                <select
                    value={dataForm.selectedTag}
                    name="selectedTag"
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-white/20 backdrop-blur text-yellow border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-300"

                >
                    <option value="">All Tags</option>
                    {allTags.map((tag, index) => (
                        <option key={index} value={tag}>
                            {tag}
                        </option>
                    ))}
                    {[...new Set(frameworkData.flatMap(item => item.tags))].map((tag, index) => (
                        <option key={index} value={tag} className="text-white">
                            {tag}
                        </option>
                    ))}
                </select>
            </div>

            {/* 🔥 CARD LIST */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFrameworks.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-white shadow-xl hover:scale-105 hover:shadow-2xl transition duration-300"
                    >
                        {/* Glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/30 to-emerald-400/30 opacity-0 hover:opacity-100 transition"></div>

                        <div className="relative z-10">
                            <h2 className="text-xl font-bold mb-2">
                                {item.name}
                            </h2>

                            <p className="text-sm text-white/80 mb-3">
                                {item.description}
                            </p>

                            <p className="text-xs text-white/70 mb-2">
                                Developed by:{" "}
                                <span className="font-semibold text-white">
                                    {item?.details?.developer}
                                </span>{" "}
                                ({item?.details?.releaseYear})
                            </p>

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