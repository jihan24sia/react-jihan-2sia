export const customers = Array.from({ length: 30 }, (_, i) => ({
    id: `CUST-${i + 1}`,
    name: `Customer ${i + 1}`,
    email: `customer${i + 1}@mail.com`,
    phone: `08123${Math.floor(Math.random() * 999999)}`,
    loyalty: ["Bronze", "Silver", "Gold"][i % 3]
}));