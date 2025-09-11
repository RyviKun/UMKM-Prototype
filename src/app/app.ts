import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  template: `
  <div class="app-wrapper">
    <img src="/background.jpg"/>
    <app-header />
    <main>
      <router-outlet/>
    </main>
    <app-footer />
    
  </div>
  `,
  styles: [
    `
    .app-wrapper{
      position: relative;
      
    }
    img{
      position: absolute;
      top:0;
      left:0;
      z-index: -1;
      repeat: repeat;
      overflow: hidden;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.05;
    }
    main {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      box-sizing: border-box;
    }
    `
  ],
})
export class App {
  protected readonly title = signal('UMKM-Protoype');
}
