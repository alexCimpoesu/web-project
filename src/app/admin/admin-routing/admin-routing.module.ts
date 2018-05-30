import { DashboardComponent } from './../../dashboard/dashboard.component';
import { ConcesionarioDetalleComponent } from './../../concesionario-detalle/concesionario-detalle.component';
import { AuthGuardService } from './../../auth-guard.service';
import { AdminDashboardComponent } from './../admin-dashboard/admin-dashboard.component';
import { ConcesionariosComponent } from './../../concesionarios/concesionarios.component';
import { AdminComponent } from './../admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const adminRoutes: Routes = [
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
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
