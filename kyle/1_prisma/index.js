const express = require("express");
const app = express();
const create = require("./helpers/create");
const fetch = require("./helpers/fetch");
const update = require("./helpers/update");
const deleted = require("./helpers/delete");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());

async function main() {
  //-- create functions
  // create();

  //-- fetch Data
  // fetch()

  //--- update Data
  // update();

  //--- delete data
  deleted();
}

main()
  .catch((e) => console.error(e.message))
  .finally(async () => {
    await prisma.$disconnect();
  });
