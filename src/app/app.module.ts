import { Http, ConnectionBackend } from '@angular/http';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { MessageService } from './message.service';
import { ConcesionarioService } from './concesionario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AdminRoutingModule,
    HttpClientModule,
    LoginRoutingModule,
  ],
  providers: [
    ConcesionarioService,
    MessageService,
    AuthGuardService,
    AuthService,
     Http,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
 }
