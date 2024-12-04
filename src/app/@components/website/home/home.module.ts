import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { HeroSectionModule } from '../hero-section/hero-section.module';
import { ObjectivesModule } from "../objectives/objectives.module";

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    HeroSectionModule,
    ObjectivesModule
],
  // exports: [HomeComponent],
})
export class HomeModule {}
