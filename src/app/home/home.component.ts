import { Component, OnInit } from '@angular/core';
import { Publi } from '../models/publi';
import { User } from '../models/user';
import { PubliService } from '../services/publiService';
import { AuthGuardService } from '../services/authGuardService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allPubli: Publi[];
  user: User;

  constructor(
    private publis : PubliService,
    private auth : AuthGuardService) { 
      this.user = this.auth.userId;
      this.allPubli =[];
   }

  ngOnInit() {
    this.allPubli = this.publis.getAll();
    this.user = this.auth.userId;
  }

}
