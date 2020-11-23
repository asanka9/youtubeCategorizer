import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {

  isLoggedIn = false;

  title = 'admin4utbecategory';

  constructor(){
    if(localStorage.getItem('user')!== null)
    this.isLoggedIn= true
    else
    this.isLoggedIn = false
  }

  isLoggedOn(value){
    this.isLoggedIn = value;
  }




}
