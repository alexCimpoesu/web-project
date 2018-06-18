import { TokenInterceptorService } from './token-interceptor.service';
import { Http, ConnectionBackend } from '@angular/http';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { MessageService } from './message.service';
import { ConcesionarioService } from './concesionario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConcesionariosComponent } from './concesionarios/concesionarios.component';
import { ConcesionarioDetalleComponent } from './concesionario-detalle/concesionario-detalle.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { Router } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { ManageConcesionariosComponent } from './admin/manage-concesionarios/manage-concesionarios.component';
import { AdminRoutingModule } from './admin/admin-routing/admin-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing/login-routing.module';
import { NuevoConcesionarioComponent } from './nuevo-concesionario/nuevo-concesionario.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { FiltroConcesionariosPipe } from './filtro-concesionarios.pipe';
import { AveriasComponent } from './averias/averias.component';
import { DetalleAveriaComponent } from './detalle-averia/detalle-averia.component';
import { NuevaAveriaComponent } from './nueva-averia/nueva-averia.component';
import { AveriaService } from './averia.service';
import { TopicsComponent } from './topics/topics.component';
import { DetalleTopicComponent } from './detalle-topic/detalle-topic.component';
import { TopicService } from './topic.service';
import { NuevoTopicComponent } from './nuevo-topic/nuevo-topic.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { MensajeDetalleComponent } from './mensaje-detalle/mensaje-detalle.component';
import { NuevoMensajeComponent } from './nuevo-mensaje/nuevo-mensaje.component';
import { MensajeService } from './mensaje.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosService } from './usuarios.service';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { FiltroUsuariosPipe } from './filtro-usuarios.pipe';
import { FiltroAveriasPipe } from './filtro-averias.pipe';
import { FiltroForoPipe } from './filtro-foro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ConcesionariosComponent,
    ConcesionarioDetalleComponent,
    MessagesComponent,
    DashboardComponent,
    AdminDashboardComponent,
    AdminComponent,
    ManageConcesionariosComponent,
    LoginComponent,
    NuevoConcesionarioComponent,
    BarraNavComponent,
    FiltroConcesionariosPipe,
    AveriasComponent,
    DetalleAveriaComponent,
    NuevaAveriaComponent,
    TopicsComponent,
    DetalleTopicComponent,
    NuevoTopicComponent,
    MensajesComponent,
    MensajeDetalleComponent,
    NuevoMensajeComponent,
    UsuariosComponent,
    NuevoUsuarioComponent,
    UsuarioDetalleComponent,
    FiltroUsuariosPipe,
    FiltroAveriasPipe,
    FiltroForoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    LoginRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
  },
    ConcesionarioService,
    AveriaService,
    TopicService,
    MessageService,
    AuthGuardService,
    AuthService,
    MensajeService,
     Http,
     UsuariosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
