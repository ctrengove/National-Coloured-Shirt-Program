import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';

import { ImagePage } from '../image/image';
/**
 * Generated class for the TheTwoUmpireSystemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-the-two-umpire-system',
  templateUrl: 'the-two-umpire-system.html',
})
export class TheTwoUmpireSystemPage {
  url = '';

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheTwoUmpireSystemPage');
  }

  imagePopup() {
    let image = this.modalCtrl.create(ImagePage, { 'url': event.toElement.src });
    image.present();
  }
  
}
