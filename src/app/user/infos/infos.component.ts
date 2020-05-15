import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/authService';
import { AuthGuardService } from 'src/app/services/authGuardService';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  userForm : FormGroup;
  user: User;
  message: string;

  constructor(
    private formBuilder : FormBuilder,
    private auth : AuthService,
    private guard: AuthGuardService, 
    ) { 
      this.message = '';
    }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group({
      mail:  [this.user.mail],
      password1:  [this.user.pw],
      password2:  [this.user.pw],
      phone:  [this.user.phone],
      address:  [this.user.address]
    });
  }

  onSubmitForm(){
    const formValue = this.userForm.value;
    console.log(formValue);
    if(formValue["password1"] == formValue["password2"]){
      const u = {
        "mail": formValue["mail"],
        "password": formValue["password1"],
        "phone": formValue["phone"],
        "address": formValue["address"]
      };
      this.auth.changeInfo(this.user.mail, u);
    }
    
  }

}
