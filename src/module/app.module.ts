import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [ProdutosModule, CategoriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
