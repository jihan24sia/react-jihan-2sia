import React, { useState } from 'react';
import { MdFastfood, MdTimer, MdStars } from "react-icons/md";

// 1. IMPORT DASAR
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import Badge from '../components/Badge';
import Card from '../components/Card';
import Table from '../components/Table';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

// 2. IMPORT FORM COMPONENTS
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import TextArea from "../components/TextArea";

// 3. IMPORT FEEDBACK COMPONENTS
import Alert from "../components/Alert";
import Modal from "../components/Modal";
import Loading from "../components/Loading";

// 4. IMPORT SECTION COMPONENTS
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";

export default function Components() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Container>
            {/* Jarak antar section besar dikurangi dari space-y-20 ke space-y-10 */}
            <div className="max-w-6xl mx-auto p-6 space-y-10">

                <PageHeader
                    title="Component Library"
                    breadcrumb={["Dashboard", "UI Kit"]}
                />

                {/* --- SECTION 1: LANDING --- */}
                <div className="space-y-6">
                    <SectionTitle number="01" title="Landing Page Sections" />
                    <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                        <HeroSection
                            title="Sedap Malam: Citarasa Nusantara"
                            subtitle="Nikmati masakan autentik dengan bahan rempah pilihan."
                        />
                    </div>
                    {/* FeatureSection biasanya sudah punya padding internal besar, 
                        kita bungkus supaya tidak nambah jarak luar */}
                    <div className="-mt-4">
                        <FeatureSection
                            title="Keunggulan"
                            features={[
                                { name: "Bahan Organik", desc: "Lokal terbaik.", icon: <MdFastfood size={20} /> },
                                { name: "Delivery Cepat", desc: "Hangat selalu.", icon: <MdTimer size={20} /> },
                                { name: "Higienis", desc: "Standar Internasional.", icon: <MdStars size={20} /> },
                            ]}
                        />
                    </div>
                </div>

                {/* --- SECTION 2: UI ELEMENTS --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <section className="space-y-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <SectionTitle number="02" title="Buttons" />
                        <div className="flex flex-wrap gap-3">
                            <Button type="primary">Primary</Button>
                            <Button type="success">Success</Button>
                            <Button type="danger">Danger</Button>
                        </div>
                    </section>

                    {/* SECTION AVATAR */}

                    <section className="space-y-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <SectionTitle number="03" title="Avatar" />

                        <div className="flex -space-x-3">
                            <Avatar name="F" />
                            <Avatar name="H" />
                            <Avatar name="B" />
                        </div>
                    </section>

                    {/* SECTION BADGE */}
                    <section className="space-y-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <SectionTitle number="04" title="Badge" />

                        <div className="flex gap-2">
                            <Badge type="success">Aktif</Badge>
                            <Badge type="warning">Pending</Badge>
                            <Badge type="primary">Selesai</Badge>
                            <Badge type="secondary">Baru</Badge>
                        </div>
                    </section>
                </div>

                {/* --- SECTION 3: FORM --- */}
                <section className="space-y-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <SectionTitle number="05" title="Form Inputs" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField label="Nama Lengkap" placeholder="Masukkan nama..." />
                        <SelectField label="Level Member" options={["Bronze", "Silver", "Gold"]} />
                        <div className="md:col-span-2">
                            <TextArea label="Alamat" placeholder="Alamat lengkap..." />
                        </div>
                    </div>
                </section>

                {/* --- SECTION 4: FEEDBACK & DISPLAY --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <section className="space-y-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <SectionTitle number="06" title="Feedback & Modal" />
                        <div className="space-y-3">
                            <Alert type="success" message="Berhasil diproses!" />
                            <Button type="primary" onClick={() => setIsModalOpen(true)} className="w-full">
                                Buka Modal
                            </Button>
                        </div>
                    </section>

                    <section className="space-y-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <SectionTitle number="07" title="Data Display" />
                        <div className="overflow-hidden rounded-xl border border-gray-50">
                            <Table headers={["ID", "Produk", "Status"]}>
                                <tr>
                                    <td className="p-3 text-xs font-mono">#001</td>
                                    <td className="p-3 font-bold text-sm">Kopi Susu</td>
                                    <td className="p-3"><Badge color="success">Ready</Badge></td>
                                </tr>
                            </Table>
                        </div>
                    </section>
                </div>

                {/* --- SECTION 5: CARDS --- */}
                <div className="space-y-6">
                    <SectionTitle number="08" title="Cards & Layouts" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Card dengan Gambar (Biasanya buat Produk) */}
                        <Card className="p-0 overflow-hidden group">
                            <div className="h-40 bg-gray-200 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1680674814945-7945d913319c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Rice"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-gray-800">Nasi Goreng Beef</h4>
                                    <Badge type="success">Rp 25k</Badge>
                                </div>
                                <p className="text-gray-400 text-xs mb-4">Nasi goreng dengan daging sapi yang lezat dan gurih.</p>
                                <Button type="primary" className="w-full text-xs py-2">Add to Cart</Button>
                            </div>
                        </Card>

                        {/* Card Statistik (Buat Dashboard) */}
                        <Card className="flex items-center gap-4 border-l-4 border-l-emerald-500">
                            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                                <MdFastfood size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Sales</p>
                                <h3 className="text-xl font-black text-gray-800">1,284</h3>
                            </div>
                        </Card>

                        {/* Card Info/Simple */}
                        <Card className="bg-slate-800 text-white">
                            <h4 className="font-bold mb-2 flex items-center gap-2">
                                <MdStars className="text-amber-400" /> Premium Member
                            </h4>
                            <p className="text-slate-400 text-xs mb-4">Dapatkan diskon 15% untuk setiap pembelian di atas Rp 100k.</p>
                            <button className="text-xs font-bold text-emerald-400 hover:underline">Pelajari Selengkapnya →</button>
                        </Card>

                    </div>
                </div>

                <section className="space-y-6">
                    <SectionTitle number="09" title="Product Display" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ProductCard
                            name="Sate Ayam Madura"
                            price="Rp 35.000"
                            description="10 tusuk sate ayam bumbu kacang spesial dengan irisan bawang merah dan cabe."
                            image="https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/02/Resep-Sate-Ayam-Madura.jpg?fit=500%2C470&ssl=1"
                            onAdd={() => alert("Ditambahkan ke keranjang!")}
                        />

                        <ProductCard
                            name="Es Teh Manis"
                            price="Rp 15.000"
                            description="Kesegaran teh pilihan dengan gula asli dan es kristal yang menyegarkan alami."
                            image="https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1064&auto=format&fit=crop"
                            onAdd={() => alert("Seger banget!")}
                        />
                        <ProductCard
                            name="Butterscotch Pudding"
                            price="Rp 25.000"
                            description="Dessert lembut dan creamy dengan rasa karamel manis khas butterscotch yang lumer di mulut."
                            image="https://everydaypie.com/wp-content/uploads/2023/01/Butterscotch-Pudding-4.jpg"
                            onAdd={() => alert("Seger banget!")}
                        />
                    </div>
                </section>

                <Footer />
            </div>

            {/* MODAL */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Konfirmasi">
                <div className="p-4 space-y-4 text-center">
                    <p className="text-gray-500 text-sm">Yakin ingin hapus data ini?</p>
                    <div className="flex gap-3">
                        <button onClick={() => setIsModalOpen(false)} className="flex-1 text-gray-400">Batal</button>
                        <Button type="danger" className="flex-1" onClick={() => setIsModalOpen(false)}>Hapus</Button>
                    </div>
                </div>
            </Modal>
        </Container>
    );
}

function SectionTitle({ number, title }) {
    return (
        <div className="flex items-center gap-2 mb-2">
            <span className="flex items-center justify-center w-6 h-6 bg-emerald-600 text-white text-[9px] font-black rounded">
                {number}
            </span>
            <h3 className="text-gray-800 text-[11px] font-black uppercase tracking-widest">
                {title}
            </h3>
        </div>
    );
}