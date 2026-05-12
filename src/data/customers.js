const namaJawa = [
    "Bambang Pamungkas", "Siti Aminah", "Joko Widodo", "Sri Wahyuni", "Eko Prasetyo",
    "Dwi Hartanto", "Tri Utami", "Kartika Sari", "Agus Santoso", "Dewi Lestari",
    "Rahmat Hidayat", "Slamet Riyadi", "Puji Astuti", "Sugeng Rawuh", "Anang Hermansyah",
    "Budi Utomo", "Ratna Mutu Manikam", "Gatot Kaca", "Indah Permatasari", "Wawan Setiawan",
    "Kusuma Wardani", "Heri Setiyono", "Mulyono", "Suroto", "Nanang Kosim",
    "Tuti Alawiyah", "Dedi Sugandi", "Lilis Karlina", "Asep Sunandar", "Yanto Basna"
];

export const customers = Array.from({ length: 30 }, (_, i) => ({
    id: `CUST-${i + 1}`, // Format ID: CUST-1, CUST-2, dst.
    name: namaJawa[i % namaJawa.length],
    email: `${namaJawa[i % namaJawa.length].toLowerCase().replace(/\s/g, '')}${i + 1}@mail.com`,
    phone: `08123${Math.floor(100000 + Math.random() * 900000)}`,
    loyalty: ["Bronze", "Silver", "Gold"][i % 3],
    totalOrders: Math.floor(Math.random() * 50) + 1,
    favorite: ["Nasi Goreng", "Ayam Bakar", "Es Teh Manis", "Sate Ayam", "Soto Betawi"][i % 5]
}));