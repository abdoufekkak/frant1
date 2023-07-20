import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VilleComponent } from './ville/ville.component';
import { AdminComponent } from './admin/admin.component';
import { ProduitComponent } from './produit/produit.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { RestauComponent } from './restau/restau.component';
import { LivreurComponent } from './livreur/livreur.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AddOrModAdminComponent } from './admin/component/add-or-mod-admin/add-or-mod-admin.component'; // Importez le module HttpClientModule
import { TableauadminComponent } from './admin/component/tableauadmin/tableauadmin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VilleComponent,
    AdminComponent,
    ProduitComponent,
    DashbordComponent,
    RestauComponent,
    LoginComponent,
    TableauadminComponent,
    AddOrModAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
