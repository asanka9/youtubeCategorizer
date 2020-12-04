import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent  } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './module/login/login.component';
import { HomeComponent } from './module/home/home.component';
import { SettingsComponent } from './module/settings/settings.component';

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { AngularFireAuthModule } from "@angular/fire/auth";
import {MatStepperModule} from '@angular/material/stepper';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { CategoryComponent } from './shared/steppers/category/category.component';
import { ItemComponent,SafePipe } from './shared/steppers/item/item.component';
import { AppssComponent } from './shared/steppers/appss/appss.component';
import {FormsModule} from '@angular/forms';
import { ReportComponent } from './module/report/report.component';
// These are for scl components
import { SclComponent } from './module/scl/scl.component';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NoteComponent } from './module/note/note.component';
import { TestComponent } from './module/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    SettingsComponent,
    CategoryComponent,
    ItemComponent,
    AppssComponent,
    SafePipe,
    ReportComponent,
    SclComponent,
    NoteComponent,
    TestComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatBadgeModule,
    MatButtonModule,
    MatStepperModule,
    AngularFireAuthModule,
    MatDividerModule,
    ScrollingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
