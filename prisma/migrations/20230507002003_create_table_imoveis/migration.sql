-- CreateTable
CREATE TABLE "imoveis" (
    "id" SERIAL NOT NULL,
    "tipoImovel" TEXT NOT NULL,
    "Endereco" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "imoveis_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "imoveis" ADD CONSTRAINT "imoveis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
