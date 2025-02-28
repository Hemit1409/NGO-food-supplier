const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const donors = await prisma.donor.findMany();
  console.log(donors);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
