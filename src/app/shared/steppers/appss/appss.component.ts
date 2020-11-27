import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appss',
  templateUrl: './appss.component.html',
  styleUrls: ['./appss.component.scss']
})
export class AppssComponent implements OnInit {

  youtubeList = [1,2,3,34,4]

  constructor() { }

  ngOnInit(): void {
  }

  onBookChange(event){
    alert(event.value);

  }
}
