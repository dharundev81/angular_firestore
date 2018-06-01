import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service';
import {item} from '../../models/item'

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  item: item = {
    title: '',
    description: ''
  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {

  }

  onSubmit(){
    if(this.item.title != '' && this.item.id != ''  ){
      this.itemService.addItem(this.item);
      this.item.title = '';
      this.item.description = '';
    }
  }


  // onSubmit(){
  //   console.log('hi');
  // }

}
