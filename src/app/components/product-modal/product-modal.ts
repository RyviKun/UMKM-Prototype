import { Component,  OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {ProductModalService} from '../../services/product-modal.service';
@Component({
  selector: 'app-product-modal',
  imports: [],
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.scss'
})
export class ProductModal implements OnInit, OnDestroy {
  visible = false;
  product: any = null;
  private sub!: Subscription;

  constructor(private modalService: ProductModalService) {}

  ngOnInit(): void {
    this.sub = this.modalService.visible$.subscribe(v => this.visible = v);
    this.sub.add(this.modalService.productData$.subscribe(p => this.product = p));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onClose(){
    this.modalService.close();
  }
}
