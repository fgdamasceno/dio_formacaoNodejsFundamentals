import * as database from "./utils/database.js";
import key from "./utils/api.js";

async function main() {
  let databaseName = "PostgreSQL";
  database.connectToDatabase(databaseName);
  database.disconectDatabase();
  console.log(database.databaseType, database.databaseType.typeData);
  console.log(key);
}

main();
