import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  @Output() handleLoginState = new EventEmitter<any>();

  ngOnInit(): void {
  }

  logOut(){
    this.auth.logout();
    this.handleLoginState.emit(false);
  }

}
