import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchBar } from '../../search-bar/search-bar';

@Component({
  selector: 'app-header',
  imports: [RouterLink, SearchBar],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  title = signal('UMKM-Protoype');
}
