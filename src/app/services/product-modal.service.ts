import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../model/product.type';
@Injectable({
  providedIn: 'root'
})
export class ProductModalService {
  private isModalVisible = new BehaviorSubject<boolean>(false);
  visible$ = this.isModalVisible.asObservable();

  private productData = new BehaviorSubject<any>(null);
  productData$ = this.productData.asObservable();

  constructor() { }

  open(product: Product) {
    this.productData.next(product);
    this.isModalVisible.next(true);
    console.log(product);
  }

  close() {
    this.isModalVisible.next(false);
    console.log("Modal closed");
  }
  
}
