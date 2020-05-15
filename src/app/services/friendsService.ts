import { Injectable } from '@angular/core';
import { Friends } from 'src/app/models/friends';
import { AuthGuardService } from './authGuardService';

@Injectable({
    providedIn: 'root'
})
export class FriendsService {
    private friends : Friends[];
    private myF: string[];

    constructor(private authGuard : AuthGuardService){
        this.friends = [
            {
                "userActif": "admin@admin.fr",
                "userFriend": "fabien@admin.fr",
            },
            {
                "userActif": "fabien@admin.fr",
                "userFriend": "admin@admin.fr",
            },
            {
                "userActif": "fabien@admin.fr",
                "userFriend": "carla@admin.fr",
            },
            {
                "userActif": "carla@admin.fr",
                "userFriend": "fabien@admin.fr",
            },
        ];
        this.myF = [];
    }

    getAll(){
        return this.friends;
    }
    
    addFriend(mail1: string, mail2: string){
        this.friends.push(
            {
                "userActif": mail1,
                "userFriend": mail2,
            }
        );
    }

    getFriendUser(user: string){
        for(var i = 0 ; i < this.friends.length; i++){
            if(this.friends[i].userActif == user){
                this.myF.push(this.friends[i].userFriend);
            }
        }
        return this.myF;
    }

    

}