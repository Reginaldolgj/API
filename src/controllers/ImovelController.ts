import { Request, Response } from "express";
import { prisma } from "../database";

export default {
  async createImovel(request: Request, response: Response) {
    try {
      const { tipoImovel, Endereco, userId } = request.body;

      const imovel = await prisma.imoveis.create({
        data: {
          tipoImovel,
          Endereco,
          userId,
        },
      });

      return response.json({
        error: false,
        message: "Sucesso ao cadastrar o imovel",
        imovel
      })
    } catch(error) {
      return response
      .json({ message: error })
  }
  },
};
