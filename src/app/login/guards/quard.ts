import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    
    if(this.auth.getDataFromLocalStorage() || this.auth.gettoken()){
      
      
      const data = localStorage.getItem('myDataKey');
      if(data)
      this.auth.settoken(JSON.parse(data))
      return true;}
    else {
      
      this.router.navigateByUrl('/');
      return false;
    }
  }
}