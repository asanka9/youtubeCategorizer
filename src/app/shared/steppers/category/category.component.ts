import { Component, OnInit } from '@angular/core';
import {DataBaseService} from 'src/app/services/data-base.service';
import { NgModule }      from '@angular/core';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  appList = []
  categoryList = []
  type:string;


  constructor(private database : DataBaseService) { }

  category_Name : string;
  database_Name : string;
  url_ : string;
  appName : string;

  ngOnInit(): void {

    /*
    this.database.getAllApps01().subscribe(
      (res)=>{
        res.forEach(element => {
          this.appList.push(element.data()['databaseName'])
        });
      }
    );
    */

    this.database.getAllApps().subscribe(
      res=>  (this.appList = res)
    );

  }

  onAppChange(event){
    this.appName = event.value;
    this.database.getAllCategories(this.appName).subscribe(
      res=>  (this.categoryList = res)
    );
  }



  createCategory(name,databaseName,url){

    this.database.createNewCategory(
      {
        'name': name,
        'databaseName': databaseName,
        'url': url,
        'type':this.type,
        'id':firebase.firestore.FieldValue.serverTimestamp(),
      }
      ,this.appName);
  }

  deleteCategory(data){
    this.database.deleteCategory(data,this.appName);
  }

}
