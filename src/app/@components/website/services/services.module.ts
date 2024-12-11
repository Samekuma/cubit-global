import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionModule } from '../hero-section/hero-section.module';
import { FooterModule } from "../footer/footer.module";

const routes: Routes = [{ path: '', component: ServicesComponent }];

@NgModule({
  declarations: [ServicesComponent],
  imports: [CommonModule, HeroSectionModule, RouterModule.forChild(routes), FooterModule],
})
export class ServicesModule {}
