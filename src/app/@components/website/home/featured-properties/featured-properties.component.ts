import { Component, OnInit } from '@angular/core';

export interface cardData {
  title: string;
  type: string;
  description: string;
  cost: string;
  image: string;
}

@Component({
  selector: 'app-featured-properties',
  templateUrl: './featured-properties.component.html',
  styleUrls: ['./featured-properties.component.scss'],
})
export class FeaturedPropertiesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
  ];
}
