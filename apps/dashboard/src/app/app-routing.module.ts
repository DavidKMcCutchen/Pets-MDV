import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from "@angular/router";
import { DogsComponent } from './dogs/dogs.component';
import { DogsService } from "@pets/core-data";
import { LoginComponent } from "@pets/ui-login";

 const routes: Route[] = [
   {path: '', component: LoginComponent},
   {path: 'dogs', component: DogsComponent},
   {path: 'login', component: LoginComponent},
   {path: '**', redirectTo: '', pathMatch: 'full'}
 ]

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 })
 export class RoutingModule {}
