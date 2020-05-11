import { Component } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gretagram';
  isAuth: boolean;

  constructor(
    private authGuard:  AuthGuardService, 
  ){}

  onSignOut(){
    this.authGuard.logout();
    this.isAuth = this.authGuard.isConnected;
  }
}
