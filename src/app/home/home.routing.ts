import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ShowTopicComponent } from '../show-topic/show-topic.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'topic',
    component: ShowTopicComponent,
  },
];

export const routing = RouterModule.forChild(routes);
