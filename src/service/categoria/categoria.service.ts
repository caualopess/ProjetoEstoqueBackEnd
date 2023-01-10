import { Injectable } from '@nestjs/common';
import prisma from 'prisma/prisma';
import { ICreateCategory, IUpdateCategory } from 'src/interfaces/ICategoria';


@Injectable()
export class CategoriaService {
    async deletarCategoria(id: number) {
        return await prisma.categoria.delete({
            where:{
                id:id
            }
        })
    }
    async atualizarCategoria(categoria: IUpdateCategory) {
        return await prisma.categoria.update({
            data:{
                nome: categoria.nome
            },
            where:{
                id: categoria.id
            }
        })
    }
    async buscarProdutoEspecífico(id: number) {
        return await prisma.categoria.findUnique({
            where:{
                id: id
            }
        })
    }
    async cadastrarCategoria(categoria: ICreateCategory) {
        return await prisma.categoria.create({
            data:{
                nome: categoria.nome
            }
        }) 
        
    }
    async buscarTodasAsCategorias() {
        return await prisma.categoria.findMany()
    }
}
