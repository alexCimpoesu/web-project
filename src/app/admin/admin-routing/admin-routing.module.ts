import { DashboardComponent } from './../../dashboard/dashboard.component';
import { ConcesionarioDetalleComponent } from './../../concesionario-detalle/concesionario-detalle.component';
import { AuthGuardService } from './../../auth-guard.service';
import { AdminDashboardComponent } from './../admin-dashboard/admin-dashboard.component';
import { ConcesionariosComponent } from './../../concesionarios/concesionarios.component';
import { AdminComponent } from './../admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaAveriaComponent } from './../../nueva-averia/nueva-averia.component';
import { AveriasComponent }from './../../averias/averias.component';
import { DetalleAveriaComponent } from './../../detalle-averia/detalle-averia.component';


const adminRoutes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        children: [
          { path: 'averias', component: AveriasComponent, canActivate: [AuthGuardService] },
          { path: 'averia/:id', component: DetalleAveriaComponent, canActivate: [AuthGuardService]},
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
