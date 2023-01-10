import { Injectable } from '@nestjs/common';
import prisma from 'prisma/prisma';
import { ICreateProduct, IUpdateProduct } from 'src/interfaces/IProdutos';

@Injectable()
export class ProdutosService {
    async deletarProduto(id:number) {
        return await prisma.produto.delete({
            where:{
                id: id
            }
        })
    }
    async atualizarProduto(produto:IUpdateProduct) {
        return await prisma.produto.update({
            where:{
                id: produto.id
            },
            data:{
                nome: produto.nome,
                categoriaId: produto.categoriaId
            } 
        })
    }
    async buscarProduto(id:number) {
        return await prisma.produto.findUnique({
            where:{
                id: id
            }
        })
    }
    async cadastrarProduto(produto:ICreateProduct) {
        return await prisma.produto.create(
            {
                data:{
                    nome: produto.nome,
                    categoriaId: produto.categoriaId
                }
            }
        ) 
    }
    async buscarTodosOsProdutos() {
        return await prisma.produto.findMany()
    }

}
