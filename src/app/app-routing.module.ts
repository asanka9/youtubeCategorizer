import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './module/home/home.component';
import {SettingsComponent} from './module/settings/settings.component';
import { ReportComponent } from './module/report/report.component';
import { SclComponent } from './module/scl/scl.component';
import {NoteComponent} from './module/note/note.component';
import {TestComponent} from './module/test/test.component';
import {SubCreateComponent} from './module/sub-create/sub-create.component';





const routes: Routes = [
  {path:'',children:[
    {path:'',component:HomeComponent},
    {path:'setting',component:SettingsComponent},
    {path:'report',component:ReportComponent},
    {path:'scl',component:SclComponent},
    {path:'note',component:NoteComponent},
    {path:'t1',component:TestComponent},
    {path:'subc',component:SubCreateComponent}


  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
