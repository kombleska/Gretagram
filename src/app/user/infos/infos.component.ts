import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/authService';
import { AuthGuardService } from 'src/app/services/authGuardService';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  user: User;

  constructor(
    private auth : AuthService,
    private guard: AuthGuardService
    ) { 
      this.user = this.auth.getUser();
    }

  ngOnInit() {
  }

}
