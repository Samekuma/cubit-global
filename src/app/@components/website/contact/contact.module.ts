import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroSectionModule } from '../hero-section/hero-section.module';
import { FooterModule } from "../footer/footer.module";
import { ContactAddressModule } from "./contact-address/contact-address.module";

const routes: Routes = [{ path: '', component: ContactComponent }];

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, HeroSectionModule, RouterModule.forChild(routes), FooterModule, ContactAddressModule],
})
export class ContactModule {}
