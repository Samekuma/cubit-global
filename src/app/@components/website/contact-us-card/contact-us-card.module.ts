import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsCardComponent } from './contact-us-card.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactUsCardComponent],
  imports: [CommonModule, MatFormFieldModule, ReactiveFormsModule,],
  exports: [ContactUsCardComponent],
})
export class ContactUsCardModule {}
