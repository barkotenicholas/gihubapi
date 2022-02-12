import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ReposComponent } from './repos/repos.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponentComponent
  },
  {
    path:'search/:git-search',
    component:HomeComponentComponent
  },
  {
    path:'repos/:git-id',
    component:ReposComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
