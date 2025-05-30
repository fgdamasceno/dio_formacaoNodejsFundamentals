const prompt = require("prompt-sync") ({sigint: true})

const num = Math.floor(Math.random() * 10 + 1);

if (num < 5) {
  console.log("Hello World!");
} else {
  let name = prompt("What is your name? ");
  console.log(`Hello ${name}`);
}