-- CreateTable
CREATE TABLE "Postre" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Postre_pkey" PRIMARY KEY ("id")
);
