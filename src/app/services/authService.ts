import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { exists } from 'fs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private users: User[];
    private user: User;
    private err: string;

    constructor() {
        this.users = [
            {
                "mail": "admin@admin.fr",
                "pw": "adminA",
                "phone":"555-234-456",
                "address": ""
            },
            {
                "mail": "fabien@admin.fr",
                "pw": "adminA",
                "phone":"234-456-555",
                "address": ""
            },
            {
                "mail": "carla@admin.fr",
                "pw": "adminA",
                "phone":"456-456-555",
                "address": ""
            }
        ]
    }

    getOneUser(mail: string) {
        var exist = false;
        for (var i = 0; i < this.users.length; i++) {
            if(this.users[i].mail == mail){
                    this.user = this.users[i];
                    exist = true;
            }
        }
        if(exist == false){
            this.err = "User don't exist";
        }

        return exist;
    }

    login(mail: string, pw: string){
        if (this.getOneUser(mail)){
            if (this.user.pw == pw) {
                return true;
            } else {
                this.err = "Password False !";
                return false
            }
        }
    }

    addUser(mail:string, pw:string, phone:string, add:string){
        this.users.push(
            {
                "mail": mail,
                "pw": pw,
                "phone":phone,
                "address": add
            }
        );
    }

    getErr(){
        return this.err;
    }

}