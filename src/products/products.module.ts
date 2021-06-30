import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  //metadata
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {
  //
}
