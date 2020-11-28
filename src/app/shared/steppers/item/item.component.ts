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
    this.appName = event.value;
  }

  selectCategory(event){
    this.categoryName = event.value;
  }

  addItem(){
    alert(this.id)
    this.database.createNewItem({'id':this.id,'url':this.url},'21sdsd2','21212');
  }

}
