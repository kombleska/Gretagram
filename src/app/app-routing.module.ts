import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

import { InfosComponent } from './user/infos/infos.component';
import { StatComponent } from './user/stat/stat.component';
import { PubliComponent } from './user/publi/publi.component';

import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';



const routes: Routes = [
  {path:'', component:AuthComponent},
  {path:'home', component:HomeComponent},
  {path:'user', component:InfosComponent},
  {path:'stat', component:StatComponent},
  {path:'publi', component: PubliComponent}, 
  {path:'research', component: ResearchComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
