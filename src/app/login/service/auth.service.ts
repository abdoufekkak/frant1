import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject,Observable, tap } from "rxjs";
import { Login } from "../model/login";
import { api_login } from "./api";
import { Router } from "@angular/router";

@Injectable({
    providedIn:"root"
})
export class AuthService{
    private sharedDataSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
    private token:string="kZdgh";
    

    gettoken():string{
        return this.token;
    }
    settoken(value:string){
      this.token=value;
    }
    constructor(private http: HttpClient,private route:Router) {}
  

    login(login:Login){
    return  this.http.post<string>(api_login,login)
    }

    getDataFromLocalStorage() {
        const data = localStorage.getItem('myDataKey');
        if (data) {
          return true
        }
        else return false
        
      }

      setSharedData(data: string) {
        this.sharedDataSubject.next(data);
      }
      getSharedData(): Observable<string> {
        return this.sharedDataSubject.asObservable();
      }
    
     

      
}