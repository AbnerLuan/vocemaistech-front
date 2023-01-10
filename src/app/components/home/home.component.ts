import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

images: any[]=[
     'assets/img/banner1.jpg',
     'assets/img/banner2.jpg'
  ];

  images2 = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
     
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;   
    
  }
  ngOnInit(): void {
    
  }

}

