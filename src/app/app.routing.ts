import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
// import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    },
    {
      path: 'login',
      loadChildren: () => import('./login-page/login-page.component').then(m => m.LoginPageComponent)
    },
    // {
    //   path: 'pages',
    //   loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    // },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

