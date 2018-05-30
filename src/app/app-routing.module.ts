import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConcesionariosComponent } from './concesionarios/concesionarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ConcesionarioDetalleComponent } from './concesionario-detalle/concesionario-detalle.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        children: [
          { path: 'concesionarios', component: ConcesionariosComponent },
          { path: '', component: AdminDashboardComponent },
          { path: 'concesionario/:id', component: ConcesionarioDetalleComponent},
          { path: 'dashboard', component: DashboardComponent },
        ]
      }
    ]
  },
 { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
