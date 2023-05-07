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
        imovel,
      });
    } catch (error) {
      return response.json({ message: error });
    }
  },

  async listImovel(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const imovel = await prisma.imoveis.findUnique({
        where: { id: Number(id) },
      });

      if (!imovel) {
        return response.json({
          error: true,
          message: "Erro: Imovel não encontrado!",
        });
      }
      return response.json({
        error: false,
        imovel,
      });
    } catch (error) {
      return response.json({ message: error });
    }
  },
  async atualizarImovel(request: Request, response: Response) {
    try {
      const { id, tipoImovel, Endereco } = request.body;
      const imovelExist = await prisma.imoveis.findUnique({
        where: { id: Number(id) }
      });

      if (!imovelExist) {
        return response.json({
          error: true,
          message: "Error: Imovel não encontrado",
        });
      }
      const imovel = await prisma.imoveis.update({
        where: {
          id: Number(request.body.id)
        },
        data: {
          Endereco,
          tipoImovel
        }
      });
      return response.json({
        error: false,
        message: "Imovel atualizado com sucesso!",
        imovel
      });

    } catch (error) {
      return response.json({ message: error });
    }
  },
};
