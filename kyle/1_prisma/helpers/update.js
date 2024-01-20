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

const update2 = async () => {
  const user = await prisma.user.update({
    where: {
      email: "john@example.com",
    },
    data: {
      age: {
        increment: 1, // increment, decrement, multiply , divide
      },
    },
  });

  console.log(user);
};

const update3 = async () => {
  /*
  // create a user preferences without user.
  let user  = await prisma.userPreference.create({
    data: {
      emailUpdates: true
    }
  })
  // op: { id: '851ce957-e48f-4da6-ab3d-bc66aaab7141', emailUpdates: true }
  */

  /*
  const user = await prisma.user.update({
    where: {
      email: "john@example.com",
    },
    data: {
      userPreference: {
        connect: {
          id: "851ce957-e48f-4da6-ab3d-bc66aaab7141",
        },
        // disconnect: true,
      },
    },
  });
  */

  const user = await prisma.user.create({
    data: {
      name: "forhad",
      email: "forad@example.com",
      userPreference: {
        connect: {
          id: "851ce957-e48f-4da6-ab3d-bc66aaab7141",
        },
      },
    },
  });

  console.log(user);
};

const update = async () => {
  // update1();
  //   update2(); // no age column, just for ex
  update3();
  //   update4();
  // updateMany1();
};

module.exports = update;
