import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

import { InfosComponent } from './user/infos/infos.component';
import { PubliComponent } from './user/publi/publi.component';

import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { AuthGuardService } from './services/authGuardService';
import { AllStatComponent } from './user/all-stat/all-stat.component';



const routes: Routes = [
  {path:'', component:AuthComponent},
  {path:'home',canActivate : [AuthGuardService], component:HomeComponent},
  {path:'user',canActivate : [AuthGuardService], component:InfosComponent},
  {path:'stat',canActivate : [AuthGuardService], component:AllStatComponent},
  {path:'publi',canActivate : [AuthGuardService], component: PubliComponent}, 
  {path:'research',canActivate : [AuthGuardService], component: ResearchComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
