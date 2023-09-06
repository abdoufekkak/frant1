import { Component,Output,EventEmitter } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { Login } from './model/login';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() valueEmitted = new EventEmitter<string>();
login:Login=new Login()
  constructor(private auth: AuthService,
    private router: Router) { }

  onlogin(){
this.auth.login(this.login).pipe((tap((value)=>{
  localStorage.setItem('myDataKey', JSON.stringify(value));

  this.auth.settoken(value);
  this.router.navigateByUrl("/isengards");
}))).subscribe()
  }
}
