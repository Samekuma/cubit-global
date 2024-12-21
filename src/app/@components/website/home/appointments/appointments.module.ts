import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsComponent } from './appointments.component';
import { ContactUsCardModule } from '../../contact-us-card/contact-us-card.module';

@NgModule({
  declarations: [AppointmentsComponent],
  imports: [CommonModule, ContactUsCardModule],
  exports: [AppointmentsComponent],
})
export class AppointmentsModule {}
