import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel-component.component.html',
  styleUrls: ['./carousel-component.component.css']
})
export class CarouselComponent implements OnInit {
  images = ["https://picsum.photos/id/237/300/200",
    "https://picsum.photos/id/238/300/200",
    "https://picsum.photos/id/239/300/200"];
  isDisabledNext: boolean = false;
  isDisabledPrev: boolean = false;
  i: number = 0;
  src: string = this.images[this.i];
  dots: boolean[] = [false, false, false];

  nextClick() {
    if (this.i < this.images.length - 1) {
      this.i++;
      this.src = this.images[this.i];
      this.isDisabledNext = false;
      this.dots.fill(false);
      this.dots[this.i] = true;
    }
    else {
      this.isDisabledNext = true;
    }
    this.isDisabledPrev = false;
  }

  prevClick() {
    if (this.i > 0) {
      this.i--;
      this.src = this.images[this.i];
      this.isDisabledPrev = false;
      this.dots.fill(false);
      this.dots[this.i] = true;
    }
    else {
      this.isDisabledNext = false;
      this.isDisabledPrev = true;
    }
    this.isDisabledNext = false;
  }

  ngOnInit() {
    this.dots[0] = true;
  }
}

