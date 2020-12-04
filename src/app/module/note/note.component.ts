import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {


  noteMapList = [{'type':'A','note':'Helloo World'},{'type':'A','note':'Helloo World'},{'type':'A','note':'Helloo World'}];
  temp = [1,32,23,23,23,23,2,32];

  selectedNumOfAnwsers(event){

  }

  constructor() { }

  ngOnInit(): void {
  }

}
