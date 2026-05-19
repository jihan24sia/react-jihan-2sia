import React, { useState } from 'react';
// 1. IMPORT COMPONENTS
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import Badge from '../components/Badge';
import Card from '../components/Card';
import ProductCard from '../components/ProductCard';
import Table from '../components/Table';
import Footer from '../components/Footer';

// 2. IMPORT FORM COMPONENTS
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import TextArea from "../components/TextArea";

// 3. IMPORT ICONS (Biar makin mirip halaman Customers)
import { MdWidgets, MdAdsClick, MdLayers, MdInput } from "react-icons/md";

export default function Components() {
    return (
        <Container>
            <div className="p-4 space-y-8">
                {/* Header dengan Style PageHeader */}
                <PageHeader
                    title="Design System"
                    breadcrumb={["Sedap", "Components"]}
                >
                    <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
                        <MdWidgets /> UI Kit v1.0
                    </div>
                </PageHeader>

                {/* GRID SYSTEM UNTUK ELEMEN KECIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* SECTION: BUTTONS */}
                    <Card className="p-6 border-t-4 border-blue-500">
                        <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold uppercase text-[10px] tracking-widest">
                            <MdAdsClick size={16}/> Buttons & Actions
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button type="primary">Primary</Button>
                            <Button type="success">Success</Button>
                            <Button type="danger">Danger</Button>
                        </div>
                    </Card>

                    {/* SECTION: AVATARS & BADGES */}
                    <Card className="p-6 border-t-4 border-purple-500">
                        <div className="flex items-center gap-2 mb-4 text-purple-600 font-bold uppercase text-[10px] tracking-widest">
                            <MdLayers size={16}/> Identity & Status
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex -space-x-3">
                                <Avatar name="Fikri" />
                                <Avatar name="Hendra" />
                                <Avatar name="Salman" />
                            </div>
                            <div className="flex gap-2">
                                <Badge color="success">Aktif</Badge>
                                <Badge color="warning">Pending</Badge>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* SECTION: DATA TABLE */}
                <section>
                    <div className="flex items-center gap-2 mb-3 text-gray-400 font-bold uppercase text-[10px] tracking-widest px-2">
                         Table Display
                    </div>
                    <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                        <Table headers={["ID", "Produk", "Harga", "Status"]}>
                            <tr className="hover:bg-emerald-50 transition-colors border-b border-gray-50">
                                <td className="p-4 font-mono text-gray-400 text-xs">#PRO-001</td>
                                <td className="p-4 font-bold text-gray-700">Sepatu Nike</td>
                                <td className="p-4 text-emerald-600 font-bold">Rp 500.000</td>
                                <td className="p-4 text-center">
                                    <Badge color="success text-[10px]">Tersedia</Badge>
                                </td>
                            </tr>
                            <tr className="hover:bg-emerald-50 transition-colors border-b border-gray-50">
                                <td className="p-4 font-mono text-gray-400 text-xs">#PRO-002</td>
                                <td className="p-4 font-bold text-gray-700">Kaos Polos</td>
                                <td className="p-4 text-emerald-600 font-bold">Rp 100.000</td>
                                <td className="p-4 text-center">
                                    <Badge color="danger text-[10px]">Habis</Badge>
                                </td>
                            </tr>
                        </Table>
                    </div>
                </section>

                {/* SECTION: FORM INPUTS */}
                <Card className="p-8 border-t-8 border-hijau shadow-2xl">
                    <div className="flex items-center gap-2 mb-6 text-emerald-600 font-black uppercase text-xs tracking-widest justify-center">
                        <MdInput size={20}/> Form Input Components
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <InputField
                            label="Nama Lengkap"
                            placeholder="Contoh: Fikri Haikal"
                        />
                        <SelectField
                            label="Kategori Member"
                            options={["Bronze", "Silver", "Gold", "Platinum"]}
                        />
                        <div className="md:col-span-2">
                            <TextArea
                                label="Alamat Pengiriman"
                                placeholder="Tuliskan alamat lengkap rumah Anda..."
                            />
                        </div>
                    </div>
                </Card>

                <Footer />
            </div>
        </Container>
    );
}