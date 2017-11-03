import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';

import { ImagePage } from '../image/image';

/**
 * Generated class for the FairOrFoulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-fair-or-foul',
  templateUrl: 'fair-or-foul.html',
})
export class FairOrFoulPage {
  url = '';

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FairOrFoulPage');
  }

  imagePopup() {
    let image = this.modalCtrl.create(ImagePage, { 'url': event.target.src });
    image.present();
  }

}
