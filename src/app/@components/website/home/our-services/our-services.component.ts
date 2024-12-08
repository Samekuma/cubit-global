import { Component, OnInit } from '@angular/core';

export interface cardDetails {
  title: string;
  description: string;
}

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
})
export class OurServicesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cardContent: cardDetails[] = [
    {
      title: 'Real Estate & Construction',
      description:
        'We specialize in estate agency, land brokerage, and property transactions, offering a wide range of real estate services. We also supply construction equipment, materials, and resources.',
    },

    {
      title: 'Property Acquisition & Development',
      description:
        'We acquire, manage, and develop real estate properties, including land, buildings, and other assets, for sale, lease, or improvement.',
    },

    {
      title: 'Interior Design Services',
      description:
        ' Our team offers expert interior design, transforming homes, offices, hotels, and more into functional and beautiful spaces',
    },

    {
      title: 'Procurement & Project Management',
      description:
        'We provide procurement services and expert project management to ensure seamless execution of projects.',
    },
  ];

  padWithZero(index: number): string {
    return ('0' + index).slice(-2);
  }
}
