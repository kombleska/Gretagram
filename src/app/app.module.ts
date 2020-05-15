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
import { AllStatComponent } from './user/all-stat/all-stat.component';
import { StatComponent2 } from './user/stat2/stat2.component';
import { StatComponent3 } from './user/stat3/stat3.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SinginComponent,
    SingupComponent,
    HomeComponent,
    InfosComponent,
    StatComponent,
    StatComponent2,
    StatComponent3,
    PubliComponent,
    ResearchComponent,
    AllStatComponent
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
