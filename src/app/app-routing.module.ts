import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './module/home/home.component';
import {SettingsComponent} from './module/settings/settings.component';

const routes: Routes = [
  {path:'',children:[
    {path:'',component:HomeComponent},
    {path:'setting',component:SettingsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
