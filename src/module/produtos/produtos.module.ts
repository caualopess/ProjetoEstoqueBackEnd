import { Module } from '@nestjs/common';
import { ProdutosController } from 'src/controller/produtos/produtos.controller';
import { ProdutosService } from 'src/service/produtos/produtos.service';

@Module({
    imports: [],
    controllers: [ProdutosController],
    providers: [ProdutosService],
  })
export class ProdutosModule {}
