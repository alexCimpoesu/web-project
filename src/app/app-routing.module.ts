import { DashboardComponent } from './dashboard/dashboard.component';
import { ConcesionariosComponent } from './concesionarios/concesionarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConcesionarioDetalleComponent } from './concesionario-detalle/concesionario-detalle.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
