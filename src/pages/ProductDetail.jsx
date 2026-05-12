import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdArrowBack, MdRestaurant, MdAccessTime, MdAttachMoney } from "react-icons/md";

export default function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                const data = response.data;
                const menuData = [
                    { title: "Nasi Goreng Spesial", brand: "Solaria", cat: "Main Course", q: "fried-rice" },
                    { title: "Ayam Bakar Madu", brand: "RM Sederhana", cat: "Main Course", q: "grilled-chicken" },
                    { title: "Kopi Susu Gula Aren", brand: "Janji Jiwa", cat: "Drinks", q: "iced-coffee" },
                    { title: "Iced Caramel Latte", brand: "Starbucks", cat: "Drinks", q: "latte" },
                    { title: "Mie Goreng Jawa", brand: "Bakmi GM", cat: "Main Course", q: "noodles" },
                    { title: "Sate Ayam Madura", brand: "Sate Khas Senayan", cat: "Main Course", q: "satay" },
                    { title: "Paket Panas 1", brand: "KFC", cat: "Fast Food", q: "fried-chicken" },
                    { title: "Beef Burger Deluxe", brand: "Burger King", cat: "Fast Food", q: "burger" },
                    { title: "Es Teh Manis", brand: "Warung Leko", cat: "Drinks", q: "iced-tea" },
                    { title: "Bebek Goreng Crispy", brand: "Bebek Tepi Sawah", cat: "Main Course", q: "fried-duck" },
                    { title: "Soto Betawi", brand: "Kafe Betawi", cat: "Main Course", q: "soup" },
                    { title: "Dimsum Mentai", brand: "Mie Gacoan", cat: "Appetizer", q: "dimsum" },
                ];

                const index = data.id - 16; 
                const custom = menuData[index] || { title: data.title, brand: "Local Resto", cat: "Food", q: "food" };

                setProduct({
                    ...data,
                    title: custom.title,
                    brand: custom.brand,
                    category: custom.cat,
                    thumbnail: `https://loremflickr.com/600/400/${custom.q}?lock=${data.id}`
                });
            })
            .catch(() => setError("Menu tidak ditemukan."));
    }, [id]);

    if (error) return <div className="p-8 text-center text-red-600 font-bold">{error}</div>;
    if (!product) return <div className="p-20 text-center font-bold text-hijau animate-bounce text-xl">Menyiapkan Hidangan... 👨‍🍳</div>;

    return (
        <div className="p-4 sm:p-8">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-hijau mb-6 transition-colors">
                <MdArrowBack /> Kembali ke Menu
            </button>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row border border-gray-100">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                    <img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-hijau text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">Chef Choice</div>
                </div>

                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-orange-500 mb-2 font-bold uppercase tracking-widest text-xs">
                        <MdRestaurant /> {product.brand}
                    </div>
                    <h2 className="text-3xl font-black text-gray-800 mb-4">{product.title}</h2>
                    <p className="text-gray-500 mb-6 italic">"{product.description}"</p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-gray-50 p-3 rounded-2xl border">
                            <div className="flex items-center gap-2 text-gray-400 text-[10px] mb-1 uppercase"><MdAccessTime /> Waktu Masak</div>
                            <p className="font-bold text-gray-700 text-sm">15-20 Menit</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-2xl border">
                            <div className="flex items-center gap-2 text-gray-400 text-[10px] mb-1 uppercase"><MdAttachMoney /> Harga Porsi</div>
                            <p className="font-bold text-hijau text-lg">Rp {(product.price * 5000).toLocaleString('id-ID')}</p>
                        </div>
                    </div>
                    <button className="w-full bg-hijau text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-100 hover:brightness-90 transition-all">Pesan Sekarang</button>
                </div>
            </div>
        </div>
    );
}