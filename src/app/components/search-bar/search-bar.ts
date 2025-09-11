import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {
  searchField = signal('');
  loading = signal(false); 
  
  constructor(private router: Router) {}

  search() {
    const value = this.searchField();
    this.loading.set(true);  

    
    this.router.navigate(['/menu'], { queryParams: { search: value } })
      .finally(() => this.loading.set(false)); 
  }
}
