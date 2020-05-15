import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authService';
import { User } from '../models/user';
import { FriendsService } from '../services/friendsService';
import { Friends } from '../models/friends';
import * as L from 'leaflet';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  users: User[];
  friends: Friends[];
  afficheUserName: string[];
  herFriend: string[];
  private map;

  constructor(
    private auth : AuthService,
    private friend: FriendsService
    ) {   
      this.users = [];
      this.friends = [];
      this.afficheUserName = [];
      this.herFriend = [];
      
  }

  ngOnInit() {
    this.initializeMapOptions();
    this.users = this.auth.getAllUser();
    this.friends = this.friend.getAll();
    console.log(this.friends)
    this.afficheUserName = [];
    for (var i = 0; i < this.friends.length; i++) {
        if(this.auth.getUser().mail == this.friends[i].userActif){
          this.herFriend.push(this.friends[i].userFriend);
        }
    }
    for (var i = 0; i < this.users.length; i++) {
      var ok = false;
      for (var j = 0; j < this.herFriend.length; j++) {
        ok = (this.herFriend[j] == this.users[i].mail || this.auth.getUser().mail  == this.users[i].mail );
      }
      if(!ok){
        this.afficheUserName.push(this.users[i].mail);
      }
    }
    console.log(this.afficheUserName);
  }

  private initializeMapOptions() {
    const myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 12);
 
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);
  }

}
