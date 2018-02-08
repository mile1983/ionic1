// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';

// @Component({
//   selector: 'page-home',
//   templateUrl: 'home.html'
// })
// export class HomePage {

//   constructor(public navCtrl: NavController) {

//   }

// }

import { Component } from '@angular/core';
import {NavController, NavParams,ModalController} from 'ionic-angular';
import {AddToDoPage} from '../add-to-do/add-to-do';
import {ToDoService} from '../../Shared/ToDoService'
import {ToDoItemPage} from '../to-do-item/to-do-item'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedItem: any;
  items: Array<{title: string, note: string}>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public todoService:ToDoService,
    public modalCtrl:ModalController
    
    ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.items = this.todoService.getAll();
    
  }

  public selectItem(item) {
    this.selectedItem = item;
    this.modalCtrl.create(ToDoItemPage,{todoItem:item}).present();

    console.log(item);
  }
  public addNewTodo(){
    // console.log("bla");
    this.navCtrl.push(AddToDoPage);
  }
}
