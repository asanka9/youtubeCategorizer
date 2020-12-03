import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './module/home/home.component';
import {SettingsComponent} from './module/settings/settings.component';
import { ReportComponent } from './module/report/report.component';
import { SclComponent } from './module/scl/scl.component';




const routes: Routes = [
  {path:'',children:[
    {path:'',component:HomeComponent},
    {path:'setting',component:SettingsComponent},
    {path:'report',component:ReportComponent},
    {path:'scl',component:SclComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
