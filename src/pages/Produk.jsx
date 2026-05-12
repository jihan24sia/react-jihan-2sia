import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
        <div className="p-4">
            <PageHeader title="Menu Restoran" breadcrumb={["Dashboard", "Menu"]} />
            <div className="overflow-x-auto mt-4">
                <table className="w-full bg-white shadow rounded-xl overflow-hidden text-sm">
                    <thead className="bg-hijau text-white font-bold uppercase">
                        <tr>
                            <th className="p-4 border-r border-green-600">Code</th>
                            <th className="p-4 border-r border-green-600 text-left">Title</th>
                            <th className="p-4 border-r border-green-600">Category</th>
                            <th className="p-4 border-r border-green-600 text-left">Brand</th>
                            <th className="p-4 border-r border-green-600 text-right">Price</th>
                            <th className="p-4">Stock</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {loading ? (
                            <tr><td colSpan="6" className="p-10 text-center italic text-gray-400">Loading...</td></tr>
                        ) : (
                            products.map((p) => (
                                <tr key={p.id} className="text-center hover:bg-emerald-50 transition-colors">
                                    <td className="p-4 text-gray-400 font-mono">FD-{p.id.toString().padStart(3, '0')}</td>
                                    <td className="p-4 text-left font-bold flex items-center gap-3">
                                        <img src={p.thumbnail} alt="" className="w-12 h-12 rounded-xl object-cover border" />
                                        <Link to={`/products/${p.id}`} className="text-emerald-600 hover:underline">{p.title}</Link>
                                    </td>
                                    <td className="p-4 text-orange-600 font-black text-[10px] uppercase">
                                        <span className="bg-orange-50 px-2 py-1 rounded">{p.category}</span>
                                    </td>
                                    <td className="p-4 text-left">{p.brand}</td>
                                    <td className="p-4 text-right font-black">Rp {(p.price * 5000).toLocaleString('id-ID')}</td>
                                    <td className="p-4 font-bold text-hijau">{p.stock} Porsi</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}