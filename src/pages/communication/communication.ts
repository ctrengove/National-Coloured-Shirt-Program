import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';

import { ImagePage } from '../image/image';
/**
 * Generated class for the CommunicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-communication',
  templateUrl: 'communication.html',
})
export class CommunicationPage {
  url = '';

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunicationPage');
  }

  imagePopup() {
    let image = this.modalCtrl.create(ImagePage, { 'url': event.toElement.src });
    image.present();
  }

}
