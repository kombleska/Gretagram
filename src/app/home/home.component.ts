import { Component, OnInit } from '@angular/core';
import { Publi } from '../models/publi';
import { User } from '../models/user';
import { PubliService } from '../services/publiService';
import { AuthGuardService } from '../services/authGuardService';
import { Friends } from '../models/friends';
import { FriendsService } from '../services/friendsService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allPubli: Publi[];
  user: User;
  myFriend: string[]

  constructor(
    private publis : PubliService,
    private auth : AuthGuardService,
    private friend: FriendsService) { 
      this.user = this.auth.userId;
      this.allPubli =[];
      this.myFriend = [];
   }

  ngOnInit() {
    this.allPubli = this.publis.getAll();
    this.user = this.auth.userId;
    this.myFriend = this.friend.getFriendUser(this.user.mail);
  }

}
