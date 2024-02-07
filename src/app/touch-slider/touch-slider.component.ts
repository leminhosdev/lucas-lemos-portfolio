import { Component, Input } from '@angular/core';

export interface Slide {
  imgSrc: string,
  imgAlt: string
}

@Component({
  selector: 'app-touch-slider',
  templateUrl: './touch-slider.component.html',
  styleUrls: ['./touch-slider.component.css']
})
export class TouchSliderComponent {

    @Input() images: any = [];

    selectedindex = 0;
}
