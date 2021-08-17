const phones = [
    { name: "samsung s7", price: 5600, camera: 13, storage: 64 },
    { name: "Poco X3 Pro", price: 410000, camera: 13, storage: 64 },
    { name: "xiaomi 10T", price: 450000, camera: 13, storage: 64 },
    { name: "redmi note 10T", price: 320000, camera: 13, storage: 64 },
    { name: "mi 11x pro", price: 850000, camera: 13, storage: 64 },
    { name: "redmi note 10", price: 465000, camera: 13, storage: 64 }
];
let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest.price
    }
}
console.log(cheapest);
