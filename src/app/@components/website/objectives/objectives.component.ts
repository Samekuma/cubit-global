import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss'],
})
export class ObjectivesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  cards = [
    {
      title: 'Real Estate & Construction',
      description:
        'We specialize in estate agency, land brokerage, and property transactions...',
      backgroundColor: 'rgb(138, 216, 192)',
    },
    {
      title: 'Property Acquisition & Development',
      description: 'We acquire, manage, and develop real estate properties...',
      backgroundColor: 'rgb(198, 244, 89)',
    },
    {
      title: 'Interior Design Services',
      description:
        'Our team offers expert interior design, transforming homes, offices...',
      backgroundColor: 'rgb(243, 154, 142)',
    },
    {
      title: 'Procurement & Project Management',
      description:
        'We provide procurement services and expert project management...',
      backgroundColor: 'rgb(133, 203, 218)',
    },
  ];
}
