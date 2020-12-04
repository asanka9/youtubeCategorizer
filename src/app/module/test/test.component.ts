import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  temp = [23,32,3,23,232]
  constructor() { }

  ngOnInit(): void {
  }

}
