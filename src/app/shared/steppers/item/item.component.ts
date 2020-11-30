import { Component, ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe, OnInit } from '@angular/core';
import {DataBaseService} from 'src/app/services/data-base.service';
import { DomSanitizer } from "@angular/platform-browser";
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}


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

  addItem(url){
    if (this.type) {
      alert('7676')
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      var match = url.match(regExp);
      alert(match[7] )
      this.database.createNewItem({'id':firebase.firestore.FieldValue.serverTimestamp(),'v_id':match[7] ,'url':url,'em_url':'https://www.youtube.com/embed/'+match[7]  },this.appName,this.categoryName);
    } else {

      this.database.createNewItem({'id':firebase.firestore.FieldValue.serverTimestamp(),'url':url},this.appName,this.categoryName);
    }

  }

  deleteItem(data){
    this.database.deletItem(data,this.appName,this.categoryName)
  }

}
