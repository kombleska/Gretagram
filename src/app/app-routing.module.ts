import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

import { InfosComponent } from './user/infos/infos.component';
import { PubliComponent } from './user/publi/publi.component';

import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { AuthGuardService } from './services/authGuardService';
import { StatComponent } from './user/stat/stat.component';
import { Stat2Component } from './user/stat2/stat2.component';
import { Stat3Component } from './user/stat3/stat3.component';



const routes: Routes = [
  {path:'', component:AuthComponent},
  {path:'home',canActivate : [AuthGuardService], component:HomeComponent},
  {path:'user',canActivate : [AuthGuardService], component:InfosComponent},
  {path:'stat1',canActivate : [AuthGuardService], component:StatComponent},
  {path:'stat2',canActivate : [AuthGuardService], component:Stat2Component},
  {path:'stat3',canActivate : [AuthGuardService], component:Stat3Component},
  {path:'publi',canActivate : [AuthGuardService], component: PubliComponent}, 
  {path:'research',canActivate : [AuthGuardService], component: ResearchComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
