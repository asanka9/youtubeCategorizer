import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  validity = false;

  constructor(private authentication:AuthenticationService) { }

  ngOnInit(): void {
  }

  async createUser(email:string,password:string){
    await this.authentication.signup(email,password);
  }

  async createAdmin(){

  }

}
