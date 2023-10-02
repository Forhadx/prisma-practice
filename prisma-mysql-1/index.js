const express = require("express");
const app = express();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async (req, res) => {
  const allUsers = await prisma.user.findMany();
  res.json(allUsers);
});

app.post("/add", async (req, res) => {
  const newUser = await prisma.user.create({ data: req.body });
  res.json(newUser);
});

app.put("/:id", async (req, res) => {
  let id = req.params.id;
  const newUser = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      age: req.body.age,
    },
  });
  res.json(newUser);
});

app.delete("/:id", async (req, res) => {
  let id = req.params.id;
  const newUser = await prisma.user.delete({
    where: { id: id },
  });
  res.json(newUser);
});

app.listen(5001, () => {
  console.log("server listening on port: 5001");
});
