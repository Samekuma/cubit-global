import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [HeroSectionComponent],
  imports: [CommonModule, MatRippleModule],
  exports: [HeroSectionComponent],
})
export class HeroSectionModule {}
