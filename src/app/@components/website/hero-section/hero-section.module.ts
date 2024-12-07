import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from './hero-section.component';
import { MatRippleModule } from '@angular/material/core';
import { HeaderModule } from "../header/header.module";

@NgModule({
  declarations: [HeroSectionComponent],
  imports: [CommonModule, MatRippleModule, HeaderModule],
  exports: [HeroSectionComponent],
})
export class HeroSectionModule {}
