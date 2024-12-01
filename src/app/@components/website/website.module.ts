import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from './header/header.module';
// import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  declarations: [WebsiteComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HeaderModule],
  // exports: [RouterModule],
})
export class WebsiteModule {}
