import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactAddressComponent } from './contact-address.component';
import { ContactUsCardModule } from '../../contact-us-card/contact-us-card.module';

@NgModule({
  declarations: [ContactAddressComponent],
  imports: [CommonModule, ContactUsCardModule],
  exports: [ContactAddressComponent],
})
export class ContactAddressModule {}
