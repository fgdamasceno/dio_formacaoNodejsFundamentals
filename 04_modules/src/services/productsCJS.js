// funções que lidam com produtos
async function getFullName(codeId, productName) {
  console.log("ProductId: " + codeId + " -- " + "ProductName: " + productName);
}

async function getProductLabel(productName) {
  console.log("Product: " + productName);
}

// CJS
module.exports = {
  getFullName,
  getProductLabel,
};
