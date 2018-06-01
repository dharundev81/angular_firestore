import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {item} from '../models/item';
// import {Observable} from 'rxjs/Observable';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollection: AngularFirestoreCollection<item>;
  items: Observable<item[]>;
  itemDoc: AngularFirestoreDocument<item>;


  constructor(public db: AngularFirestore) {
    // this.items = this.db.collection('items').valueChanges();

    this.itemsCollection = this.db.collection('items', ref => ref.orderBy('title','asc'));

    this.items = this.itemsCollection.snapshotChanges().pipe(
    map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as item;
          data.id = a.payload.doc.id;
          return data;
        });     
      }
    )
    );
   }

   getItems(  ){
     return this.items;
   }

   addItem(item: item){
      this.itemsCollection.add(item);
   }

   deleteItem(item: item){
      this.itemDoc = this.db.doc(`items/${item.id}`);
      this.itemDoc.delete();
   }

   updateItem(item: item){
     this.itemDoc = this.db.doc(`items/${item.id}`);
     this.itemDoc.update(item);
   }
}
