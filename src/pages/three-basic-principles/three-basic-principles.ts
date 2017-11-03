import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';

import { ImagePage } from '../image/image';
/**
 * Generated class for the ThreeBasicPrinciplesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-three-basic-principles',
  templateUrl: 'three-basic-principles.html',
})
export class ThreeBasicPrinciplesPage {
  url = '';

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThreeBasicPrinciplesPage');
  }

  imagePopup() {
    let image = this.modalCtrl.create(ImagePage, { 'url': event.target.src });
    image.present();
  }

}
