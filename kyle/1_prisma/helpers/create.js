const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const create1 = async () => {
  /*
      model User{
        id Int @id @default(autoincrement())
        name String 
      }  
    */
  const user = await prisma.user.create({ data: { name: "John" } });
  console.log(user); // { id: 1, name: 'John' }
};

const create2 = async () => {
  /*
      User
      UserPreference
    */

  /*
  const user = await prisma.user.create({
    data: {
      name: "John",
      email: "john@example.com",
      userPreference: {
        // create is for add linked data
        create: {
          emailUpdates: true,
        },
      },
    },
  });
  */
  console.log(user);
  /*
  {
    id: '89d5b2f6-9342-4cd1-bcb4-0c56511b04f1',
    name: 'John',
    email: 'john@example.com',
    role: 'BASIC',
    userPreferenceId: '747c7a42-1850-4652-86ec-5f5b077ede69'
  }

  userPreferenc data not return
  */
};

const create3 = async () => {
  /*
        User
        UserPreference
      */
  const user = await prisma.user.create({
    data: {
      name: "John2",
      email: "john2@example.com",
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    include: {
      userPreference: true, // this return all data of this table
    },
  });
  console.log(user);
  /*
    {
        id: 'e418024d-863e-4d1e-bc1e-54b3337dc7e1',
        name: 'John2',
        email: 'john2@example.com',
        role: 'BASIC',
        userPreferenceId: '76a07a2a-eb4c-4ca3-a424-eeeeb3050914',
        userPreference: { 
            id: '76a07a2a-eb4c-4ca3-a424-eeeeb3050914',
             emailUpdates: true 
        }
    }
    */
};

// better way to create
const create4 = async () => {
  /*
          User
          UserPreference
        */
  const user = await prisma.user.create({
    data: {
      name: "John3",
      email: "john3@example.com",
      userPreference: {
        create: {
          emailUpdates: true,
        },
      },
    },
    select: {
      name: true,
      userPreference: {
        select: {
          id: true,
          emailUpdates: true,
        },
      },
    },
  });
  console.log(user);
  /*
     {
        name: 'John3',
        userPreference: { 
            id: 'd1ece69a-03a8-448f-9cc8-1a0c97ead524',
             emailUpdates: true 
        }
      }

      only selected data return

      */
};

const createMany1 = async () => {
  /*
    User
    UserPreference
  */
  const users = await prisma.user.createMany({
    data: [
      {
        name: "John4",
        email: "john4@example.com",
      },
      {
        name: "rose",
        email: "rose@example.com",
      },
    ],
  });
  console.log(users);
  /*
    ** select not working at createMany

    output:
       { count: 2 }
  
    */
};

const create = async () => {
  //   create1();
  //   create2();
  //   create3();
  //   create4();
  createMany1();
};

module.exports = create;
