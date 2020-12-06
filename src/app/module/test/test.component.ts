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
  selectedTypeList_1 = [''];
  selectedType : string;
  finalIndex = 0;
  savedList = [false];

  //Selected Items
  selectedSubject : string;
  selectedTopic : string;
  selectedSubTopic : string;




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
    this.savedList[index]=true;

  }

  deleteButtonClick(index,name){
    this.htmlList.splice(-1,1);
    this.htmlList_1.splice(-1,1);
    this.selectedTypeList.splice(-1,1);
    this.selectedTypeList_1.splice(-1,1);
    this.savedList.splice(-1,1);

    this.finalIndex --;
  }

  createNewButtonClick(index){
    this.htmlList.reverse();
    this.htmlList.push('');
    this.htmlList_1.push('');

    this.htmlList.reverse();
    this.selectedTypeList.reverse();
    this.selectedTypeList.push('');
    this.selectedTypeList_1.push('');
    this.selectedTypeList.reverse();
    this.savedList.push(false);

    this.finalIndex ++;

  }

  selectType(event,num){
    this.selectedTypeList[num] = event.value;
    this.selectedTypeList_1[num] = event.value;
    this.savedList[num] = false;


  }

  genarateFinalString(){
    let ouput = '';
    for (let index = 0; index < this.selectedTypeList.length; index++) {
      let type = this.selectedTypeList_1[index];
      let value = this.htmlList_1[index];
      ouput+= type + value;
    }
    alert(ouput);
  }

  checkSavedOrNot(index){
      return this.savedList[index];
  }

  onInput(event,index){
    this.savedList[index] = false;
  }

}
