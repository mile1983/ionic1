import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ToDoService} from '../../Shared/ToDoService';
import {HomePage} from '../home/home';
import {AlertController} from 'ionic-angular/components/alert/alert-controller'

/**
 * Generated class for the AddToDoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-to-do',
  templateUrl: 'add-to-do.html',
})
export class AddToDoPage {
  title: string;
  note: string;
  date: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public todoService: ToDoService,
    public alertCtrl: AlertController,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddToDoPage');
  }
  addToDo(){
    // console.log(this.title);
    // console.log(this.note);
    // console.log(this.date);
    // // console.log("ovde");
    
    this.todoService.addNew({
      title: this.title,
      note: this.note,
      date: this.date,

    });
    this.showSuccessMsg();
    this.navCtrl.push(HomePage);
  }
  showSuccessMsg() {
    this.alertCtrl.create({
      title:'Cestitamo',
      subTitle:'Uspesno ste kreirali Todo',
      buttons:['U redu']
    }).present();
  }

}
