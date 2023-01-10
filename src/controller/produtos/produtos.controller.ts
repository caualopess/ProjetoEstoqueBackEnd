import { Body, Controller, Get, Post } from '@nestjs/common';
import { Delete, Param, Put } from '@nestjs/common/decorators';
import { ICreateProduct, IUpdateProduct } from 'src/interfaces/IProdutos';
import { ProdutosService } from 'src/service/produtos/produtos.service';

@Controller('produtos')
export class ProdutosController {
    constructor(private produtoProvider:ProdutosService) {}

    @Get()
    async buscarTodosOsProdutos() {
        return await this.produtoProvider.buscarTodosOsProdutos()
        
    }
    
    @Post()
    async cadastrarProduto(@Body() produto:ICreateProduct) {
        return await this.produtoProvider.cadastrarProduto(produto)
    }

    @Get('id=:id')
    async buscarProduto(@Param("id") id:string) {
        return await this.produtoProvider.buscarProduto(Number(id))
        
    }

    @Put()
    async atualizarProduto(@Body() produto:IUpdateProduct) {
        return await this.produtoProvider.atualizarProduto(produto)

    }

    @Delete(':id')
    async deletarProduto(@Param("id") id:string){
        return await this.produtoProvider.deletarProduto(Number(id))
    }
    

}
