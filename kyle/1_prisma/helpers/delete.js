const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/*
    model User{
      id Int @id @default(autoincrement())
      name String 
    }  
*/

const delete1 = async () => {
 /*
  const user = await prisma.user.delete({
    where: {
      email: "john3@example.com",
    },
  });
*/


  const user = await prisma.user.deleteMany({
    where: {
      name: "John4",
    },
  });
  // { count: 1 }
  console.log(user);
};

const delete2 = async () => {
  const user = await prisma.user.deleteMany();
  console.log(user);
};

const deleteAction = async () => {
  // delete1();
  // delete2();
};

module.exports = deleteAction;
