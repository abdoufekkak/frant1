import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { VilleComponent } from './ville/ville.component';
import { RestauComponent } from './restau/restau.component';
import { ProduitComponent } from './produit/produit.component';
import { LivreurComponent } from './livreur/livreur.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './login/guards/quard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
 
  {
    path: 'dashbord',
    component: NavbarComponent,
    canActivate: [AuthGuard], // Garde de route pour protéger l'accès aux composants enfants
    children: [
      { path: 'admin', component: AdminComponent },
      { path: 'ville', component: VilleComponent },
      { path: 'restau', component: RestauComponent },
{ path: 'produit', component: ProduitComponent },
{ path: 'livreur', component: LivreurComponent },
{ path: 'dashbord', component: DashbordComponent }

    ],
   
  },
  {path: '**',redirectTo:"/dashbord/isengards"}
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
