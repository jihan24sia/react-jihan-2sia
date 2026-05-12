export const products = Array.from({ length: 30 }, (_, i) => {
    const categories = ["Main Course", "Snacks", "Drinks", "Dessert", "Side Dish"];
    const brands = [
        "Dapur Utama", "Pawon Sedap", "Drink Station", "Pastry Unit", 
        "Dapur Sambal", "Rasa Nusantara", "Bumbu Desa", "Bite & Sweet",
        "Segar Sari", "Kedai Srawung", "Warung Ekspres", "Gudang Frozen",
        "Bumbu Ibu", "Sajian Kilat", "Dapur Bakaran"
    ];

    const menuItems = [
        "Nasi Goreng Spesial", "Ayam Bakar Madu", "Es Teh Manis", "Brownies Lumer", 
        "Dimsum Ayam", "Kopi Susu Gula Aren", "Sate Ayam Madura", "Risoles Mayo", 
        "Singkong Goreng", "Mie Goreng Jawa", "Es Jeruk Peras", "Pudding Cokelat", 
        "Ayam Geprek", "Tahu Walik", "Soto Betawi", "Es Campur", "Kebab Daging", 
        "Kentang Goreng", "Gado-Gado", "Jus Alpukat", "Roti Bakar", "Batagor", 
        "Pempek Palembang", "Es Kelapa Muda", "Martabak Telur", "Pisang Bakar", 
        "Sop Buntut", "Cumi Tepung", "Nasi Uduk", "Thai Tea"
    ];

    return {
        // Cukup panggil array menuItems-nya saja, hapus bagian + "#" + (i+1)
        title: menuItems[i % menuItems.length], 
        code: `FD-${(i + 1).toString().padStart(3, '0')}`,
        category: categories[i % categories.length],
        brand: brands[i % brands.length],
        price: 15000 + (Math.floor(Math.random() * 10) * 5000),
        stock: Math.floor(Math.random() * 50) + 10
    };
});