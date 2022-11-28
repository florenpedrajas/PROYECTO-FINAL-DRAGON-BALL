import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router, private http: HttpClient) {}


    getToken() {
    return localStorage.getItem ("token");
    }

    isLogged(){
    let token = localStorage.getItem("token");
    return token !== null ? true: false;
  }


    logout() {
    localStorage.removeItem("token");
    this.router.navigate(["/home"]);


  }
    login(user:any){
      return this.http.post("https://db-back.vercel.app/users/login", user)
  }

    register(user:any){
    return this.http.post("https://db-back.vercel.app/users/postNewUser", user)
  }

}
