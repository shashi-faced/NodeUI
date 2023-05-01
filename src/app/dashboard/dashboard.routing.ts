import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ShowTopicComponent } from '../show-topic/show-topic.component';



// import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard/topic', component: ShowTopicComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }

