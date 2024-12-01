import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HomeModule } from './@components/website/home/home.module';
// import { WebsiteModule } from 'src/app/@components/website/website.module';

const route: Routes = [
  { path: '', redirectTo: 'site', pathMatch: 'full' },

  {
    path: 'site',
    loadChildren: () =>
      import('src/app/@components/website/website.module').then(
        (m) => m.WebsiteModule
      ),
  },

  {
    path: 'app',
    loadChildren: () =>
      import('src/app/@components/webapp/webapp.module').then((m) => {
        m.WebappModule;
      }),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(route), BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [RouterModule],
})
export class AppModule {}
