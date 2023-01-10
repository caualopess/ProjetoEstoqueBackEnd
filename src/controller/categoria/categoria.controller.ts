import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ICreateCategory, IUpdateCategory } from 'src/interfaces/ICategoria';
import { CategoriaService } from 'src/service/categoria/categoria.service';

@Controller('categoria')

export class CategoriaController {
    constructor(private categoriaService:CategoriaService) {}

    @Get()
    async buscarTodasAsCategorias() {
        return await this.categoriaService.buscarTodasAsCategorias()
    }

    @Post()
    async cadastrarCategoria(@Body() categoria:ICreateCategory) {
        return await this.categoriaService.cadastrarCategoria(categoria)
    }

    @Get(':id')
    async buscarCategoriaEspecífico(@Param("id") id:string) {
        return await this.categoriaService.buscarProdutoEspecífico(Number(id))
    }  

    @Put()
    async atualizarCategoria(@Body() categoria:IUpdateCategory) {
        return await this.categoriaService.atualizarCategoria(categoria)
    }

    @Delete(':id')
    async deletarCategoria(@Param("id") id:string) {
        return await this.categoriaService.deletarCategoria(Number(id))
    }
}

