import { Component, OnInit } from '@angular/core';
import {DataBaseService} from 'src/app/services/data-base.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

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



  selectApp(event){
    this.appName = event.value.databaseName;
    this.database.getAllCategories01(this.appName).subscribe(
      res=> {
        res.forEach(element=>{
          this.categoryList.push(element.data())
        })
      }
    );
  }

  selectCategory(event){
    this.categoryName = event.value.name;
    if (event.value.type=="image") {
      this.type = false;
    } else {
      this.type = true;
    }

    this.database.getAllItem(this.appName,this.categoryName).subscribe(
      res => (this.itemList = res)
    );
  }
}
