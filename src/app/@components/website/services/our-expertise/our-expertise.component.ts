import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-our-expertise',
  templateUrl: './our-expertise.component.html',
  styleUrls: ['./our-expertise.component.scss'],
})
export class OurExpertiseComponent {
  constructor() {}

  @Input() imageSrc!: string;
  @Input() imageAlt?: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() step!: string;
  @Input() imagePosition: 'left' | 'right' = 'left';
}
