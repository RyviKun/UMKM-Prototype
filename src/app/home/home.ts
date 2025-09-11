import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../components/product-card/product-card';
import { ProductModal } from '../components/product-modal/product-modal';
import { ProductService } from '../services/product.service';
import { Carousel } from '../components/carousel/carousel';
import {Product} from '../model/product.type';
@Component({
  selector: 'app-home',
  imports: [ProductCard, ProductModal, Carousel],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit{
  
  products : Product[] = Array<Product>();
  constructor(private productService: ProductService) {
  }

  

  
  ngOnInit() {
    //product fetch
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });

    console.log(this.products)
  }

 
  
}
