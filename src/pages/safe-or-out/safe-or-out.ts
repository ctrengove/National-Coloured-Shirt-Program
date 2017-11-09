import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { ImagePage } from '../image/image';
/**
 * Generated class for the SafeOrOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-safe-or-out',
  templateUrl: 'safe-or-out.html',
})
export class SafeOrOutPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SafeOrOutPage');
  }

  imagePopup() {
    let imageinfo: any = event.target;
    let image = this.modalCtrl.create(ImagePage, { 'url': imageinfo.src });
    image.present();
  }

}
