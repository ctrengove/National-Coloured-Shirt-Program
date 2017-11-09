import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { ImagePage } from '../image/image';

/**
 * Generated class for the TheSafeSignalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-the-safe-signal',
  templateUrl: 'the-safe-signal.html',
})
export class TheSafeSignalPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheSafeSignalPage');
  }

  imagePopup() {
    let imageinfo: any = event.target;
    let image = this.modalCtrl.create(ImagePage, { 'url': imageinfo.src });
    image.present();
  }

}
