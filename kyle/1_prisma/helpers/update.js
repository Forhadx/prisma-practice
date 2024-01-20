const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const update1 = async () => {
  const user = await prisma.user.update({
    where: {
      email: "john@example.com",
    },
    data: {
      name: "John 1",
    },
  });

  console.log(user);
};

const update = async () => {
  update1();
  //   update2();
  //   update3();
  //   update4();
  // updateMany1();
};

module.exports = update;
