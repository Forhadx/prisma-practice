const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const find1 = async () => {
  const user = await prisma.user.create({ data: { name: "John" } });
  console.log(user); // { id: 1, name: 'John' }
};

const find = async () => {
    find1();
  //   find2();
  //   find3();
  //   find4();
  // findMany1();
};

module.exports = find;
