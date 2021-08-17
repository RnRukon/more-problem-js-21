// const products = [
//     { name: 'laptop', price: 45000 },
//     { name: 'shirt', price: 500 },
//     { name: 'watch', price: 3654 },
//     { name: 'phone', price: 55000 }
// ];

// let totalPrice = 0;
// for (const product of products) {
//     totalPrice = totalPrice + product.price;
// }
// console.log(totalPrice);


// --------------------------------------------


const card = [
    { name: 'laptop', price: 45000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 5 },
    { name: 'watch', price: 3654, quantity: 2 },
    { name: 'phone', price: 55000, quantity: 1 }
];

let cardTotal = 0;

for (const product of card) {

    const productTotal = product.price * product.quantity;
    cardTotal = cardTotal + productTotal;
}
console.log(cardTotal);