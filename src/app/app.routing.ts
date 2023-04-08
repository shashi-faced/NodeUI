import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  // {
  //   path:'', component: HomeComponent, children:[{}]
  // }
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

