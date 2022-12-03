import { Injectable } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class productsService {
  /* Creating a private property called products and assigning it to an empty array. */
  private products: Product[] = [];

  insertProduct(title: string, desc: string, price: number) {
    /* Creating a unique id for the product. */
    const prodId = new Date().toString();
    /* Creating a new product object, adding it to the products array, and returning the product id. */
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  }

  getProducts() {
    return [...this.products];
  }
}
