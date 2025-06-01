// Dealswith the itens logic

// cria item com subtotal calculado
async function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
    subtotal: () => {
      return parseFloat(price).toFixed(2) * quantity;
    },
  };
}

export default createItem;
