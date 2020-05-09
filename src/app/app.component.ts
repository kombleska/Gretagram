import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gretagram';
  constructor(public http: HttpClient) {}

  public ping() {
    this.http.get('https://localhost')
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }
}
