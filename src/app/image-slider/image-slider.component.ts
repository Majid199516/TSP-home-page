import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit {
  @Input('sliderDescription') sliderDescription: string[] = [];
  @Input('sliderTitle') sliderTitle: string[] = [];

  public slides = [
    {
      src: 'assets/shared/images/Image-slider01.webp',
      title: '',
      description: ''
    },
    {
      src: 'assets/shared/images/Image-slider02.webp',
      title: '',
      description: ''
    },
  ];
  ngOnInit() {
    for (let i = 0; i < this.sliderDescription.length; i++) {
      this.slides[i]['description'] = this.sliderDescription[i];
      console.log()
    }
    for (let i = 0; i < this.sliderTitle.length; i++) {
      this.slides[i]['title'] = this.sliderTitle[i];
    }
  }
}
