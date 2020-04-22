import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginRouteComponent } from './login-route/login-route.component';
import { PlayRouteComponent } from './play-route/play-route.component';
import { ResultRouteComponent } from './result-route/result-route.component';


const routes: Routes = [
  {path: 'login', component: LoginRouteComponent},
  {path: 'play', component: PlayRouteComponent},
  {path: 'result', component: ResultRouteComponent},
  {path: '**', component: LoginRouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
