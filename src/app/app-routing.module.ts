import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeoplesComponent} from './components/peoples/peoples.component';


const routes: Routes = [
  { path: '', component: PeoplesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
