import { Component, OnInit } from '@angular/core';
import {DataBaseService} from 'src/app/services/data-base.service';
import { NgModule }      from '@angular/core';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  appList = []


  constructor(private database : DataBaseService) { }

  category_Name : string;
  database_Name : string;
  url_ : string;
  appName : string;

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
    this.appName = event.value;
    alert(this.appName)

  }

  createCategory(){

    this.database.createNewCategory(
      {
        'name': this.category_Name,
        'databaseName': this.database_Name,
        'url': this.url_
      }
      ,'pop3');
  }

}
