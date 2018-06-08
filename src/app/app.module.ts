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
    DetalleTopicComponent
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
    MessageService,
    AuthGuardService,
    AuthService,
     Http,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
   
 }
