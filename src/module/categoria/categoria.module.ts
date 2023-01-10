import { Controller, Module } from '@nestjs/common';
import { CategoriaController } from 'src/controller/categoria/categoria.controller';
import { CategoriaService } from 'src/service/categoria/categoria.service';

@Module({
    imports: [],
    controllers: [CategoriaController],
    providers: [CategoriaService]
})
export class CategoriaModule {}
