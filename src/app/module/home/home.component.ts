import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  youtubeList = [1,2,3,34,4]

  constructor() { }

  ngOnInit(): void {
  }

  onBookChange(event){
    alert(event.value);

  }

}
