import { Injectable } from '@angular/core';
import { Friends } from 'src/app/models/friends';
import { AuthGuardService } from './authGuardService';

@Injectable({
    providedIn: 'root'
})
export class FriendsService {
    private friends : Friends[];

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

    

}