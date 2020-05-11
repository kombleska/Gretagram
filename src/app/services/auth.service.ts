import { Injectable } from '@angular/core';
import { HttpClient   } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  connect: boolean;
  error: string;
  login: any;
  users: any;
  url:string;

  constructor(private http : HttpClient) {
    this.url ='http://localhost:3000/user';
    this.users = http.get(this.url).subscribe(
      data => {this.users = data;}
    );
    this.connect = false;
    this.error = "Error to id or password";
  }

  createUser(user: User){
    this.http.post(
      this.url, 
      JSON.stringify(user)).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  
  httpOptions(url: string, arg1: string, httpOptions: any) {
    throw new Error("Method not implemented.");
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<unknown, unknown> {
    throw new Error("Method not implemented.");
  }

  loginApp( id: string,  pw: string){

    for (var i = 0; i < this.users.length; i++) {
      for (var user in this.users) {
        if(this.users[user].mail == id){
          if(this.users[user].pw == pw){
            this.connect = true;
            this.login = this.users[user]
          }
        }
      }
    }
    return this.login
  }

  getError(){
    return this.error;
  }
}
