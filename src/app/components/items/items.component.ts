import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import {item} from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items_list: item[];
  editState: boolean = false;
  itemToEdit: item;

  constructor(private itemserice: ItemService) {

   }

  ngOnInit() {
    this.itemserice.getItems(  ).subscribe(items =>{
       console.log(items);
      this.items_list = items;
    } )
  }

  deleteItem(event, item: item){
    this.clearState();
    this.itemserice.deleteItem(item);
  }

  editIteam(event, item: item){
    this.editState = true;
    this.itemToEdit = item; 
  }

  updateItem(item: item){
    this.itemserice.updateItem(item);
    this.clearState();
  }

  clearState(){
    this.editState = false;
    this.itemToEdit = null; 
  }


}
