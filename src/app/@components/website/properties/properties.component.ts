import { Component } from '@angular/core';
import { cardData } from '../home/featured-properties/featured-properties.component';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent {
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
