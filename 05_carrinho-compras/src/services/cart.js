// Deals with the cart lógic

// add item to the cart
async function addItem(userCart, item) {
  userCart.push(item);
}

// delete all items from the cart
async function deleteItems(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);

  if (index !== -1) {
    userCart.splice(index, 1);
  }
}

// delete an item at a time
async function removeItem(userCart, item) {
  const foundIndex = userCart.findIndex((p) => p.name === item.name);

  if (foundIndex === -1) {
    console.log("Item não encontrado");
    return;
  }

  if (userCart[foundIndex].quantity > 1) {
    userCart[foundIndex].quantity -= 1;
  }

  if (userCart[foundIndex].quantity === 1) {
    userCart.splice(foundIndex, 1);
    return;
  }
}

// calc the total value of an item
async function calcTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log("Total: " + result);
}

// show the cart items
async function displayCart(userCart) {
  console.log("Shopee Cart List:");
  userCart.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} - R$ ${item.price} | ${
        item.quantity
      }x | Subtotal ${item.subtotal()}`
    );
  });
}

export { addItem, deleteItems, removeItem, calcTotal, displayCart };
