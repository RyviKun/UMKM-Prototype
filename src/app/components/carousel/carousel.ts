import { Component, signal, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class Carousel implements OnInit{
  index = signal(0);
  private intervalId: any;

  imagePaths =
  [
    {
        "path": "/beverages.jpg"
    }
    ,
    {
        "path": "/burger.jpg"
    }
    ,
    {
        "path": "/kebab.jpg"
    }
  ];

  ngOnInit() {
    this.startInterval();


  }

   startInterval() {
    
    if(this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => {
      console.log("Interval Triggered");
      this.index.set(this.clamp(this.index() + 1, 0, 5))
    },3000)
  }

  clamp(number:number, min:number=0, max:number){
    if (number > max) return 0;
    if (number < min) return max;
    return number;
  }

  incrementIndex(){
    this.index.set(this.clamp(this.index() + 1, 0, 5))
    this.startInterval();
  }

  decrementIndex(){
    this.index.set(this.clamp(this.index() - 1, 0, 5))
    this.startInterval();
  }
}
