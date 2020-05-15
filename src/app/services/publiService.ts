import { Injectable } from '@angular/core';
import { Publi } from '../models/publi';

@Injectable({
    providedIn: 'root'
})
export class PubliService {
    private publis : Publi[]

    constructor(){
        this.publis = [
            {
                "user": "admin@admin.fr",
                "name": "plage",
                "descri":"clear is good",
                "url": "./assets/images/picture2.png"
            },
            {
                "user": "admin@admin.fr",
                "name": "after beach",
                "descri":"Beark",
                "url": "./assets/images/picture1.png"
            },
        ];
    }

    getAll(){
        return this.publis;
    }
    

    

}