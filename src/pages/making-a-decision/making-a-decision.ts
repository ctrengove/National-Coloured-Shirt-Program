import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController, ViewController } from 'ionic-angular';

import { ImagePage } from '../image/image';
/**
 * Generated class for the MakingADecisionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-making-a-decision',
  templateUrl: 'making-a-decision.html',
})
export class MakingADecisionPage {
  url = '';

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakingADecisionPage');
  }

  imagePopup() {
    let image = this.modalCtrl.create(ImagePage, { 'url': event.target.src });
    image.present();
  }

}
