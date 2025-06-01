async function connectToDatabase(dataName) {
  console.log(`Conectado ao banco ${dataName}`);
}

async function disconectDatabase() {
  console.log("Desconectando do banco de dados");
}

const databaseType = {
  userType: "admin",
  typeData: "datalocal",
};

export { connectToDatabase, disconectDatabase, databaseType };
