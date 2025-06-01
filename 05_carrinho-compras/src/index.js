// Deals with the results processed by the other related files
import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

// starts a cart with 0 itens
const cart = [];
const myWishList = [];

console.log("Welcome to your Shopee Cart!");

const item1 = await createItem("Hotwheels - Ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels - Lamborghini", 39.99, 3);
const item3 = await createItem("Hotwheels - Fusca", 9.99, 5);
const item4 = await createItem("Hotwheels - Omega", 19.98, 5);

// TESTES

// Adding items to the cart
console.log(`\nAdding hotwheels Ferrari...`);
await cartService.addItem(cart, item1);
console.log(`Adding hotwheels Lamborghini...`);
await cartService.addItem(cart, item3);
console.log(`Adding hotwheels Fusca...`);
await cartService.addItem(cart, item4);
console.log();
await cartService.displayCart(cart);

await cartService.calcTotal(cart);
// await cartService.deleteItems(cart, item1.name);

console.log("\nRemoving item...");
await cartService.removeItem(cart, item4);
await cartService.removeItem(cart, item4);
await cartService.removeItem(cart, item3);
await cartService.displayCart(cart);
await cartService.calcTotal(cart);
