import { productsService } from './products.service';
import { productsController } from './products.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [productsController],
  providers: [productsService],
})
export class ProductsModule {}
