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
import { AddOrModVilleComponent } from './ville/components/add-or-mod-ville/add-or-mod-ville.component';
import { TabVilleComponent } from './ville/components/tab-ville/tab-ville.component';
import { TabRestauComponent } from './restau/components/tab-restau/tab-restau.component';
import { AddOrModRestauComponent } from './restau/components/add-or-mod-restau/add-or-mod-restau.component';
import { AddOrUpdateProduitComponent } from './produit/components/add-or-update-produit/add-or-update-produit.component';
import { TabProduitComponent } from './produit/components/tab-produit/tab-produit.component';
import { TabLivreurComponent } from './livreur/component/tab-livreur/tab-livreur.component';
import { AddOrModLivreurComponent } from './livreur/component/add-or-mod-livreur/add-or-mod-livreur.component';
import { CarsComponent } from './dashbord/components/cars/cars.component';
import { CommandesComponent } from './dashbord/components/commandes/commandes.component';
import { CalculeComponent } from './dashbord/components/calcule/calcule.component';
import { TableauCalculeComponent } from './dashbord/components/calcule/componets/tableau-calcule/tableau-calcule.component';
import { httpInterceptorProviders } from './login/intercepteurs';
import { LivraisonCommandeComponent } from './livreur/component/livraison-commande/livraison-commande.component';

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
    AddOrModVilleComponent,
    TabVilleComponent,
    TabRestauComponent,
    AddOrModRestauComponent,
    AddOrUpdateProduitComponent,
    TabProduitComponent,
    TabLivreurComponent,
    AddOrModLivreurComponent,
    LivreurComponent,
    CarsComponent,
    CommandesComponent,
    CalculeComponent,
    TableauCalculeComponent,
    LivraisonCommandeComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
