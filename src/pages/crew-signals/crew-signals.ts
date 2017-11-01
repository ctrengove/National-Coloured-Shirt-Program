import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';

import { ImagePage } from '../image/image';
/**
 * Generated class for the CrewSignalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-crew-signals',
  templateUrl: 'crew-signals.html',
})
export class CrewSignalsPage {
  url = '';

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrewSignalsPage');
  }

  imagePopup() {
    let image = this.modalCtrl.create(ImagePage, { 'url': event.toElement.src });
    image.present();
  }

}
