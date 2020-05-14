import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/authService';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  authForm : FormGroup;
  message : string;
  newUser: boolean;
  errorMessage: string;

  constructor(
    private formBuilder : FormBuilder,
    private auth: AuthService
  ) { 
    this.newUser = false;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.authForm = this.formBuilder.group({
      mail:  ['', [Validators.required, Validators.email]],
      password:  ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      phone:  [''],
      address:  ['']
    });
  }

  onSubmitForm(){
    const formValue = this.authForm.value;
    if(this.auth.getOneUser(formValue['mail'])){
      this.errorMessage = 'Mail aldrely use !'
    } else {
      this.auth.addUser(formValue['mail'],formValue['password'], formValue['phone'], formValue['address']);
      this.newUser = true;
      this.message = "New User created ! Can you connect to the app ;) ";
    }
  }

}
