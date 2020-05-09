import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  
  authForm : FormGroup;
  errorMessage : string;

  constructor(
    private formBuilder : FormBuilder,
    private auth : AuthServiceService
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

  onSubmitForm(){
    const formValue = this.authForm.value;
    console.log(formValue);
    this.auth.getConnect(formValue['mail'], formValue['password']);
  }

}
