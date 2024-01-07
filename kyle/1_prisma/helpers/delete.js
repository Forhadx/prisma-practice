const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/*
    model User{
      id Int @id @default(autoincrement())
      name String 
    }  
*/
const delete1 = async () => {
  const user = await prisma.user.deleteMany();
  console.log(user);
};

const deleteAction = async () => {
  delete1();
};

module.exports = deleteAction;
