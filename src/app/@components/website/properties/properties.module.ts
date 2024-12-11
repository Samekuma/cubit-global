import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './properties.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionModule } from "../hero-section/hero-section.module";
import { FooterModule } from "../footer/footer.module";

const routes: Routes = [{ path: '', component: PropertiesComponent }];

@NgModule({
  declarations: [PropertiesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HeroSectionModule, FooterModule],
})
export class PropertiesModule {}
