import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { HeroSectionModule } from '../hero-section/hero-section.module';
import { ObjectivesModule } from '../objectives/objectives.module';
import { OurServicesComponent } from './our-services/our-services.component';
import { FeaturedPropertiesComponent } from './featured-properties/featured-properties.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterModule } from '../footer/footer.module';
import { AppointmentsModule } from './appointments/appointments.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    OurServicesComponent,
    FeaturedPropertiesComponent,
    TestimonialComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    HeroSectionModule,
    ObjectivesModule,
    FooterModule,
    AppointmentsModule,
  ],
  // exports: [HomeComponent],
})
export class HomeModule {}
