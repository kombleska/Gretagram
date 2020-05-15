import { Component } from '@angular/core';
import { AuthGuardService } from './services/authGuardService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gretagram';
  isAuth: boolean;
  isStat: boolean;

  constructor(
    private authGuard:  AuthGuardService
  ){}

  onSignOut(){
    this.authGuard.logout();
    this.isAuth = this.authGuard.isConnected;
    this.isStat = false;
  }

  changeStat(b: boolean){
    this.isStat = b;
  }
}
