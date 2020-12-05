import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  temp = [23,32,3,23,232]

  htmlList = [''];
  htmlList_1 = [''];
  selectedTypeList = [''];
  selectedType : string;
  finalIndex = 0;



  constructor() { }

  ngOnInit(): void {
  }

  btnClick(num){
    alert(num);
  }

  getCssClass(value){
    switch (value) {
      case value:

        break;

      default:
        break;
    }
  }

  saveButtonClick(value,index){
    this.htmlList_1[index] = value;
  }

  deleteButtonClick(index,name){
    this.htmlList.splice(-1,1);
    this.selectedTypeList.splice(-1,1);
    this.finalIndex --;
  }

  createNewButtonClick(index){
    this.htmlList.reverse();
    this.htmlList.push('');
    this.htmlList_1.push('');

    this.htmlList.reverse();
    this.selectedTypeList.reverse();
    this.selectedTypeList.push('');
    this.selectedTypeList.reverse();
    this.finalIndex ++;

  }

  selectType(event,num){
    this.selectedTypeList[num] = event.value;
  }

  genarateFinalString(){
    let ouput = '';
    for (let index = 0; index < this.selectedTypeList.length; index++) {
      let type = this.selectedTypeList[index];
      let value = this.htmlList_1[index];
      ouput+= type + value;
    }
    alert(ouput);
  }

}
