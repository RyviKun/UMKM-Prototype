import { Component, input } from '@angular/core';
import { ProductModalService } from '../../services/product-modal.service';
import { Product } from '../../model/product.type';
@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  name = input<string>();
  imgUrl = input<string>();
  description = input<string>();

  constructor(private modalService: ProductModalService) { }
  
  onClick() {
    const product : Product = {
      name: this.name(),
      imgUrl: this.imgUrl(),
      description: this.description()
    }
    this.modalService.open(product);
    console.log(this.name);
  }
}
