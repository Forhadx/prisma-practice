const express = require("express");
const app = express();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());

app.listen(5001, () => {
  console.log("server listening on port: 5001");
});
 