const express = require("express");
const app = express();
const create = require("./helpers/create");
const fetch = require("./helpers/fetch");
const update = require("./helpers/update");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());

async function main() {
  //-- create functions
  // create();

  //-- fetch Data
  // fetch()

  // update Data
  update();
}

main()
  .catch((e) => console.error(e.message))
  .finally(async () => {
    await prisma.$disconnect();
  });
