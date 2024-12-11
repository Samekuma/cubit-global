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
import { AppointmentsComponent } from './appointments/appointments.component';
import { ContactUsCardModule } from "../contact-us-card/contact-us-card.module";
import { FooterModule } from "../footer/footer.module";

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    OurServicesComponent,
    FeaturedPropertiesComponent,
    TestimonialComponent,
    AppointmentsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    HeroSectionModule,
    ObjectivesModule,
    ContactUsCardModule,
    FooterModule
],
  // exports: [HomeComponent],
})
export class HomeModule {}
