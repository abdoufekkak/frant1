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
import { HttpClientModule } from '@angular/common/http'; // Importez le module HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VilleComponent,
    AdminComponent,
    ProduitComponent,
    DashbordComponent,
    RestauComponent,
    LivreurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
