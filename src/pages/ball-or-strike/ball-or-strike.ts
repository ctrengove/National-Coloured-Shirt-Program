import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';

import { ImagePage } from '../image/image';

/**
 * Generated class for the BallOrStrikePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ball-or-strike',
  templateUrl: 'ball-or-strike.html',
})
export class BallOrStrikePage {
  url = '';

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BallOrStrikePage');
  }

  imagePopup() {
    let image = this.modalCtrl.create(ImagePage, { 'url': event.toElement.src });
    image.present();
  }

}
