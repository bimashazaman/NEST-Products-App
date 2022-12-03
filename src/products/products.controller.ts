import { Controller, Post } from '@nestjs/common';

@Controller('products')
export class productsController {
  @Post()
  addProduct() {
    return 'This action adds a new product';
  }
}
