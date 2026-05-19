import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// IMPORT CONTAINER JANGAN LUPA
import Container from "../components/Container"; 
import PageHeader from "../components/PageHeader";

export default function Produk() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://dummyjson.com/products/category/groceries")
            .then((res) => {
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

                const restoMenu = res.data.products.map((p, index) => {
                    const custom = menuData[index] || { title: p.title, brand: "Local Resto", cat: "Food", q: "food" };
                    return {
                        ...p,
                        title: custom.title,
                        brand: custom.brand,
                        category: custom.cat,
                        thumbnail: `https://loremflickr.com/200/200/${custom.q}?lock=${p.id}`
                    };
                });
                setProducts(restoMenu);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <Container>
            {/* Bungkus dengan max-w supaya rapi di tengah */}
            <div className="max-w-6xl mx-auto p-6 space-y-6">
                
                <PageHeader 
                    title="Menu Restoran" 
                    breadcrumb={["Dashboard", "Menu"]} 
                />

                <div className="bg-white shadow-sm border border-gray-100 rounded-3xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-emerald-600 text-white font-bold uppercase tracking-wider">
                                <tr>
                                    <th className="p-5 text-center w-24">Code</th>
                                    <th className="p-5 text-left">Menu</th>
                                    <th className="p-5 text-center">Category</th>
                                    <th className="p-5 text-left">Brand</th>
                                    <th className="p-5 text-right">Price</th>
                                    <th className="p-5 text-center">Stock</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {loading ? (
                                    <tr>
                                        <td colSpan="6" className="p-20 text-center">
                                            <div className="flex flex-col items-center gap-3">
                                                <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                                                <span className="italic text-gray-400">Menyiapkan hidangan...</span>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    products.map((p) => (
                                        <tr key={p.id} className="hover:bg-emerald-50/50 transition-colors group">
                                            <td className="p-4 text-center text-gray-400 font-mono text-xs">
                                                FD-{p.id.toString().padStart(3, '0')}
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="relative">
                                                        <img 
                                                            src={p.thumbnail} 
                                                            alt="" 
                                                            className="w-12 h-12 rounded-2xl object-cover border border-gray-100 shadow-sm group-hover:scale-105 transition-transform" 
                                                        />
                                                    </div>
                                                    <Link 
                                                        to={`/products/${p.id}`} 
                                                        className="font-bold text-gray-800 hover:text-emerald-600 transition-colors"
                                                    >
                                                        {p.title}
                                                    </Link>
                                                </div>
                                            </td>
                                            <td className="p-4 text-center">
                                                <span className="bg-orange-50 text-orange-600 font-black text-[9px] uppercase px-3 py-1 rounded-full border border-orange-100">
                                                    {p.category}
                                                </span>
                                            </td>
                                            <td className="p-4 text-gray-600 font-medium">
                                                {p.brand}
                                            </td>
                                            <td className="p-4 text-right font-black text-gray-800">
                                                Rp {(p.price * 5000).toLocaleString('id-ID')}
                                            </td>
                                            <td className="p-4 text-center">
                                                <span className="font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg text-xs">
                                                    {p.stock} Porsi
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Container>
    );
}