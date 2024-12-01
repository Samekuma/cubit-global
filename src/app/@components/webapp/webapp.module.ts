import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebappComponent } from './webapp.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WebappComponent,
  },
];

@NgModule({
  declarations: [WebappComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class WebappModule {}
