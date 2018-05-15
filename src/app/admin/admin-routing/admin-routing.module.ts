import { AuthGuardService } from './../../auth-guard.service';
import { AdminDashboardComponent } from './../admin-dashboard/admin-dashboard.component';
import { ConcesionariosComponent } from './../../concesionarios/concesionarios.component';
import { AdminComponent } from './../admin/admin.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        children: [
          { path: 'concesionarios', component: ConcesionariosComponent },
          { path: '', component: AdminDashboardComponent }
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
