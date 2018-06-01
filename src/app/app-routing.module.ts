import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConcesionariosComponent } from './concesionarios/concesionarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ConcesionarioDetalleComponent } from './concesionario-detalle/concesionario-detalle.component';
import { NuevoConcesionarioComponent } from './nuevo-concesionario/nuevo-concesionario.component';
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
          { path: '', component: AdminDashboardComponent },
          { path: 'dashboard', component: DashboardComponent },
        ]
      }
    ]
  },
{ path: 'concesionarios', component: ConcesionariosComponent, canActivate: [AuthGuardService] },
{ path: 'concesionario/nuevo', component: NuevoConcesionarioComponent, canActivate: [AuthGuardService]},
{ path: 'concesionario/:id', component: ConcesionarioDetalleComponent, canActivate: [AuthGuardService]},

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
