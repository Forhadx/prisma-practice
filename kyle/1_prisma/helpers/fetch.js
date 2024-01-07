const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/*
    model User{
      id Int @id @default(autoincrement())
      name String 
    }  
*/
const fetch1 = async () => {
  const user = await prisma.user.findMany();
  console.log(user); // [ { id: 1, name: 'John' }, { id: 2, name: 'John' } ]
};

const fetch2 = async () => {
  const user = await prisma.user.findMany();
  console.log(user); // [ { id: 1, name: 'John' }, { id: 2, name: 'John' } ]
};

const fetch = async () => {
  // fetch1();
  // fetch2();
};

module.exports = fetch;
