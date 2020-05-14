import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  authForm : FormGroup;
  errorMessage : string;
  user: any;

  constructor(
    private formBuilder : FormBuilder,
    private val: AppComponent
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.authForm = this.formBuilder.group({
      mail:  ['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  userValidator(valueForm){
    this.user = {
      "id" : valueForm['mail'],
      "mail": valueForm['mail'],
      "pw": valueForm['password']
    };
  }

  onSubmitForm(){

  }

}
