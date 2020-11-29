import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor( private firestore: AngularFirestore) { }


  //Apps Data Base
  createNewApp(data) {
    return new Promise<any>((resolve, reject) =>{

        this.firestore
            .collection("Apps")
            .add(data)
            .then(res => {}, err => reject(err));
    });
  }

  getAllApps(){
    return this.firestore.collection("Apps").snapshotChanges();
  }

  getAllApps01(){
    return this.firestore.collection("Apps").get();
  }


  getAllCategories01(appname){
    return this.firestore.collection(appname).get();
  }

  deleteApp(data) {
    return this.firestore.collection("Apps").doc(data.payload.doc.id).delete();
 }

 //Category Data Base
 createNewCategory(data,appname) {
  return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection(appname)
          .add(data)
          .then(res => {}, err => reject(err));
  });
}

getAllCategories(appname){
  return this.firestore.collection(appname).snapshotChanges();
}

deleteCategory(data,appname) {
  return this.firestore.collection(appname).doc(data.payload.doc.id).delete();
}

//Item Data Base
createNewItem(data,appname,categoryname) {
  return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection(appname+categoryname)
          .add(data)
          .then(res => {}, err => reject(err));
  });
}

getAllItem(appname,categoryname){
  return this.firestore.collection(appname+categoryname).snapshotChanges();
}

deletItem(data,appname,categoryname) {
  return this.firestore.collection(appname+categoryname).doc(data.payload.doc.id).delete();
}

}
