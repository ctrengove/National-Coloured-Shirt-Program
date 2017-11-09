import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { ImagePage } from '../image/image';
/**
 * Generated class for the OtherSignalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-other-signals',
  templateUrl: 'other-signals.html',
})
export class OtherSignalsPage {
  url = '';

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OtherSignalsPage');
  }

  imagePopup() {
    let imageinfo: any = event.target;
    let image = this.modalCtrl.create(ImagePage, { 'url': imageinfo.src });
    image.present();
  }

}
