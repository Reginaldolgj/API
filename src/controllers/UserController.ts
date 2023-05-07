import { Request, Response } from "express";
import { prisma } from "../database";

export default{
    async createUser(request: Request, response: Response) {
        try{
            const { name, email } = request.body;
            const userExists = await prisma.user.findUnique({ where: {email}})
            if(userExists){
                return response.json({
                    error:true,
                    message: 'Error: Usuario já existe!'
                })
            }

            const User = await prisma.user.create({
                data: {
                    name,
                    email,
                    
                }
            });
           
            return response.json({
                error: false,
                message: 'Sucesso, usuário cadastrado com sucesso!',
                User
            })
            
        } catch(error) {
            return response
            .json({ message: error })
        }

    }
}