import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  youtubeList = [1,2,3,34,4]

  constructor() { }

  ngOnInit(): void {
  }

  onBookChange(event){
    alert(event.value);

  }

}
