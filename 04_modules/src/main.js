// CJS
const product = require("./services/productsCJS");

// ESM

// CJS
async function main() {
  console.log("I am working!!!");
  product.getFullName("408", "mousepad");
  product.getProductLabel("Monitor");

  console.log(config.devArea.production);
  console.log(config.devArea);
  console.log(config.ages.at(1));
  console.log(config.sumTwoNumbers());
}

main();

// ESM
