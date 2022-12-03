import { productsService } from './products.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('products')
export class productsController {
  constructor(private productsServices: productsService) {}
  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    const generatedId = this.productsServices.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }
}
