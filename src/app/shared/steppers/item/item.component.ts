import { Component, OnInit } from '@angular/core';
import {DataBaseService} from 'src/app/services/data-base.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  youtubeList = [1,2,3,34,4]

  appList = []
  categoryList = []
  itemList = []
  type:boolean;

  id : string;
  url : string;
  appName : string;
  categoryName : string;

  constructor(private database:DataBaseService) { }

  ngOnInit(): void {
    this.database.getAllApps01().subscribe(
      (res)=>{
        res.forEach(element => {
          this.appList.push(element.data())
        });
      }
    );
  }

  onBookChange(event){
    alert(event.value);

  }

  selectApp(event){
    this.appName = event.value.databaseName;

    this.database.getAllCategories(this.appName).subscribe(
      res=>  (this.categoryList = res)
    );
  }

  selectCategory(event){
    this.categoryName = event.value.name;
    if (event.value.type=="image") {
      this.type == false;
    } else {
      this.type == true;
    }
    this.database.getAllItem(this.appName,this.categoryName).subscribe(
      res => (this.itemList = res)
    );
  }

  addItem(id,url){
    this.database.createNewItem({'id':id,'url':url},this.appName,this.categoryName);
  }

  deleteItem(data){
    this.database.deletItem(data,this.appName,this.categoryName)
  }

}
