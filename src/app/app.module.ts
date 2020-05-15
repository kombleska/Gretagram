import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SinginComponent } from './auth/singin/singin.component';
import { SingupComponent } from './auth/singup/singup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './user/infos/infos.component';
import { StatComponent } from './user/stat/stat.component';
import { PubliComponent } from './user/publi/publi.component';
import { ResearchComponent } from './research/research.component';
import { Stat2Component } from './user/stat2/stat2.component';
import { Stat3Component } from './user/stat3/stat3.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SinginComponent,
    SingupComponent,
    HomeComponent,
    InfosComponent,
    StatComponent,
    PubliComponent,
    ResearchComponent,
    Stat2Component,
    Stat3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
