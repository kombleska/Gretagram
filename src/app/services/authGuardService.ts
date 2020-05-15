import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  userId: User;
  isConnected: boolean;

  constructor(
    private route : Router
  ) {
    this.isConnected= false;
   }

  changeGuard(user: User): void{
    this.userId = user;
    this.isConnected = true;
    this.route.navigate(['/', 'home']);
  }

  logout(){
    this.userId = {
      "mail": "",
      "pw": "",
      "phone":"",
      "address": ""
    };
    this.isConnected = false;
    this.route.navigate(['../', '']);
  }

  canActivate() {
    return this.isConnected;
  }
}