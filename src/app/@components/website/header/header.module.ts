import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatRippleModule, RouterModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
