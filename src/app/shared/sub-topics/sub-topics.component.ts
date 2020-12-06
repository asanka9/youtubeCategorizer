import { Component, OnInit } from '@angular/core';
import {DataBaseService} from 'src/app/services/data-base.service';


@Component({
  selector: 'app-sub-topics',
  templateUrl: './sub-topics.component.html',
  styleUrls: ['./sub-topics.component.scss']
})
export class SubTopicsComponent implements OnInit {
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
      }
      ,this.appName);
  }

  deleteCategory(data){
    this.database.deleteCategory(data,this.appName);
  }
}
