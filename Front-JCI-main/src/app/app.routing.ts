import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { OlmLayoutComponent } from './containers/olm-layout/olm-layout.component';
import { LoginComponent } from './views/login/login.component';




export const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    },
  },

  {
    path: 'olm',
    component: OlmLayoutComponent,
    data: {
      title: 'olm layout work'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/olm/olm.module').then(m => m.OlmModule)
      },
    ],
  },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
