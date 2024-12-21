import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { HeroSectionModule } from '../hero-section/hero-section.module';
import { FooterModule } from "../footer/footer.module";
import { AppointmentsModule } from "../home/appointments/appointments.module";
import { AboutDescComponent } from './about-desc/about-desc.component';

const routes: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  declarations: [AboutComponent, AboutDescComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HeroSectionModule, FooterModule, AppointmentsModule],
})
export class AboutModule {}
