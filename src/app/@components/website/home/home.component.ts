import { Component, OnInit } from '@angular/core';
import { cardData } from './featured-properties/featured-properties.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeHeroBg: string = 'assets/images/hero-bg.jpg';
  homeTitleText: string = 'Uncover the Perfect Property for Your Way of Life';
  homeSubtitleText: string = 'Discover Your Dream Assets with Us';

  constructor() {}

  filteredContent: cardData[] = [];

  ngOnInit(): void {
    this.filteredContent = this.featuredCardContent.slice(0, 3);
  }

  featuredCardContent: cardData[] = [
    {
      title: 'Apartment - Queens',
      type: 'Modern Stylish Apartment',
      description:
        'Discover the epitome of contemporary living in our sleek and chic modern stylish apartments.',
      cost: '$150,000',
      image: 'assets/images/featured/feature-01.jpg',
    },

    {
      title: 'Apartment - Queens',
      type: 'Contemporary Apartments',
      description:
        'Experience the perfect blend of sophistication and urban living in our cutting-edge contemporary apartments.',
      cost: '$150,000',
      image: 'assets/images/featured/feature-02.jpg',
    },

    {
      title: 'Apartment - Queens',
      type: 'Suburban Single-Family Homes',
      description:
        'Embrace the idyllic charm and tranquility of suburban living in our spacious and welcoming single-family homes.',
      cost: '$150,000',
      image: 'assets/images/featured/feature-03.jpg',
    },

    {
      title: 'Apartment - Queens',
      type: 'Modern Stylish Apartment',
      description:
        'Discover the epitome of contemporary living in our sleek and chic modern stylish apartments.',
      cost: '$150,000',
      image: 'assets/images/featured/feature-01.jpg',
    },

    {
      title: 'Apartment - Queens',
      type: 'Contemporary Apartments',
      description:
        'Experience the perfect blend of sophistication and urban living in our cutting-edge contemporary apartments.',
      cost: '$150,000',
      image: 'assets/images/featured/feature-02.jpg',
    },

    {
      title: 'Apartment - Queens',
      type: 'Suburban Single-Family Homes',
      description:
        'Embrace the idyllic charm and tranquility of suburban living in our spacious and welcoming single-family homes.',
      cost: '$150,000',
      image: 'assets/images/featured/feature-03.jpg',
    },
  ];
}
