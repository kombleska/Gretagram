import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenInterceptor } from '../token/interceptor';

const baseUrl = 'http://localhost:8080/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  pw: any;

  constructor(private http: HttpClient,) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  getConnect(mail, pass) {
    this.pw = this.http.get('${baseUrl}/${mail}');
    console.log(this.pw === pass);
    return this.pw;
  }
  
}
