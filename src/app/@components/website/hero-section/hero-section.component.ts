import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  @Input() backgroundImage: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() showButton: boolean = true;
  @Input() buttonText: string = 'Learn More';

  // Default background image URL
  defaultBackground: string = 'assets/images/hero-bg.jpg';

  getBackgroundImage(): string {
    return this.backgroundImage || this.defaultBackground;
  }
}
