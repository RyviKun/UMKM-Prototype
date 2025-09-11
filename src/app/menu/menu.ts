import { Component, OnInit } from '@angular/core';
import { ProductCard } from '../components/product-card/product-card';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-menu',
  imports: [ProductCard],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu implements OnInit {
  searchQuery: string|null = null;
  products: any[] = [];

  constructor(private route: ActivatedRoute, private product:ProductService) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params =>{
      this.searchQuery = params.get('search');
      console.log(this.searchQuery);

      this.product.getProducts().subscribe(data =>{
        this.products = data?.filter((p : any) => p.name.toLowerCase().includes(this.searchQuery?.toLowerCase() ?? ''));
        console.log(this.products)
      })
    })

   
  }; 

  
}
