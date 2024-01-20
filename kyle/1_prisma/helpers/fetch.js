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
  console.log(user); // [ { id: 1, name: 'John' }, { id: 2, name: 'John' }...]
};

const fetch2 = async () => {
  const user = await prisma.user.findUnique({
    where: {
      email: "john2@example.com", // email, id, userpreference is unique so use it
      // name: "John", // name not applicable
    },
  });
  console.log(user); // { id: 1, email: "john2@example.com", name: 'John' },
};

const fetch3 = async () => {
  const user = await prisma.user.findFirst({
    where: {
      name: "John",
    },
  });
  console.log(user);
};

const fetch4 = async () => {
  const user = await prisma.user.findMany({
    distinct: ["name"], // only distict column of name will be shown
  });
  console.log(user); // [ { id: 1, name: 'John' }, { id: 2, name: 'John' }...]
};

const fetch5 = async () => {
  // paginations
  const user = await prisma.user.findMany({
    orderBy: {
      name: "asc", // asc desc
    },
    take: 2,
    skip: 1,
  });
  console.log(user); // [ { id: 1, name: 'John' }, { id: 2, name: 'John' }...]
};

const fetch6 = async () => {
  const user = await prisma.user.findMany({
    where: {
      NOT: {
        name: "John",
      },
    },
  });
  console.log(user); // [ { id: 1, name: 'John' }, { id: 2, name: 'John' }...]
};

const fetch7 = async () => {
  const user = await prisma.user.findMany({
    where: {
      userPreference: {
        emailUpdates: true,
      },
    },
  });
  console.log(user); // [ { id: 1, name: 'John' }, { id: 2, name: 'John' }...]
};

const fetch8 = async () => {
  const user = await prisma.user.findMany({
    where: {
      writtenPosts: {
        // every, none, some
        every: {
          rating: 1,
        },
      },
    },
  });
  console.log(user); // [ { id: 1, name: 'John' }, { id: 2, name: 'John' }...]
};

const fetch9 = async () => {
  const user = await prisma.post.findMany({
    where: {
      author: {
        is: {
          name: "kyle",
        },
      },
    },
  });
  console.log(user); // [ { id: 1, name: 'John' }, { id: 2, name: 'John' }...]
};

const fetch = async () => {
  // fetch1();
  // fetch2();
  // fetch3();
  // fetch4();
  // fetch5();
  // fetch6();
  // fetch7();
  // fetch8();
  fetch9();
};

module.exports = fetch;
