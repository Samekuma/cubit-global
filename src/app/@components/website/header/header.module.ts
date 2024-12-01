import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatRippleModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
