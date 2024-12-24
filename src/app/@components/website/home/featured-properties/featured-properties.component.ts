import { Component, Input } from '@angular/core';

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
export class FeaturedPropertiesComponent {
  @Input() cardContent: cardData[] = [];
}
