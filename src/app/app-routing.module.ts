import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { NuevoTopicComponent } from './nuevo-topic/nuevo-topic.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthGuardService } from './auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConcesionariosComponent } from './concesionarios/concesionarios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConcesionarioDetalleComponent } from './concesionario-detalle/concesionario-detalle.component';
import { NuevoConcesionarioComponent } from './nuevo-concesionario/nuevo-concesionario.component';
import { NuevaAveriaComponent } from './nueva-averia/nueva-averia.component';
import { DetalleAveriaComponent } from './detalle-averia/detalle-averia.component';
import { AveriasComponent } from './averias/averias.component';
import { TopicsComponent } from './topics/topics.component';
import { DetalleTopicComponent } from './detalle-topic/detalle-topic.component';
import { MensajeDetalleComponent } from './mensaje-detalle/mensaje-detalle.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

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
{ path: 'averias', component: AveriasComponent, canActivate: [AuthGuardService] },
{ path: 'averia/nuevo', component: NuevaAveriaComponent, canActivate: [AuthGuardService]},
{ path: 'averia/:id', component: DetalleAveriaComponent, canActivate: [AuthGuardService]},
{ path: 'topics', component: TopicsComponent, canActivate: [AuthGuardService] },
{ path: 'topic/nuevo', component: NuevoTopicComponent, canActivate: [AuthGuardService]},
{ path: 'topics/:id/mensajes/:idMensaje', component: MensajeDetalleComponent, canActivate: [AuthGuardService]},
{ path: 'topics/:id/mensajes', component: MensajesComponent, canActivate: [AuthGuardService]},
{ path: 'topic/:id', component: DetalleTopicComponent, canActivate: [AuthGuardService]},
{ path: 'administracion', component: UsuariosComponent, canActivate: [AuthGuardService] },
{ path: 'administracion/nuevo', component: NuevoUsuarioComponent, canActivate: [AuthGuardService] },
{ path: 'administracion/:id', component: UsuarioDetalleComponent, canActivate: [AuthGuardService] },

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
