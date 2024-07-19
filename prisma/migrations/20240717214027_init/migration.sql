-- CreateTable
CREATE TABLE "Tarea" (
    "id" TEXT NOT NULL,
    "creada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "titulo" VARCHAR(50) NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Tarea_pkey" PRIMARY KEY ("id")
);
