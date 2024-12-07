import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  @Input() backgroundImage: string = ''; // dynamic background image
  @Input() title: string = ''; // dynamic title text
  @Input() subtitle: string = ''; // dynamic subtitle text
  @Input() showButton: boolean = true; // to control button visibility
  @Input() buttonText: string = 'Learn More'; // button text

  // Default background image URL
  defaultBackground: string = 'assets/images/hero-bg.jpg';

  getBackgroundImage(): string {
    return this.backgroundImage || this.defaultBackground;
  }
}
