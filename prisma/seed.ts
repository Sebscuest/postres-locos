import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const postres = [
    {
      nombre: 'Tarta de Oreo',
      descripcion: 'Deliciosa tarta con base de Oreo',
      precio: 4.99,
      ingredientes: 'Galletas Oreo, crema, leche condensada',
    },
    {
      nombre: 'Flan de Dulce de Leche',
      descripcion: 'Flan casero con dulce de leche',
      precio: 3.5,
      ingredientes: 'Huevos, leche, azúcar, dulce de leche',
    },
    {
      nombre: 'Brownie con Helado',
      descripcion: 'Brownie caliente con helado de vainilla',
      precio: 5.0,
      ingredientes: 'Chocolate, azúcar, helado de vainilla',
    },
  ];

  for (const postre of postres) {
    await prisma.postre.create({
      data: postre,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
