import { Component, OnInit } from '@angular/core';
import { PubliService } from 'src/app/services/publiService';
import { AuthGuardService } from 'src/app/services/authGuardService';
import { Publi } from 'src/app/models/publi';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-publi',
  templateUrl: './publi.component.html',
  styleUrls: ['./publi.component.css']
})
export class PubliComponent implements OnInit {

  allPubli: Publi[];
  user: User;

  constructor(
    private publis : PubliService,
    private auth : AuthGuardService,
  ) { }

  ngOnInit() {
    this.user = this.auth.userId;
    this.allPubli =[];

    const all= this.publis.getAll();
    for(var i = 0; i < all.length; i++){
      if(all[i].user == this.user.mail){
        this.allPubli.push(all[i]);
      }
    }
  }



}
