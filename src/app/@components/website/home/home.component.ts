import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeHeroBg: string = 'assets/images/hero-bg.jpg';
  homeTitleText: string = 'Uncover the Perfect Property for Your Way of Life';
  homeSubtitleText: string = 'Discover Your Dream Home with Us';

  constructor() {}

  ngOnInit(): void {}
}
