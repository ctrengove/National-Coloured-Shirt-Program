import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';

import { ImagePage } from '../image/image';
/**
 * Generated class for the TheOutSignalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-the-out-signal',
  templateUrl: 'the-out-signal.html',
})
export class TheOutSignalPage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheOutSignalPage');
  }

  imagePopup() {
    let imageinfo: any = event.target;
    let image = this.modalCtrl.create(ImagePage, { 'url': imageinfo.src });
    image.present();
  }

}
