import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';

import { ImagePage } from '../image/image';
/**
 * Generated class for the EquipmentAndRolePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-equipment-and-role',
  templateUrl: 'equipment-and-role.html',
})
export class EquipmentAndRolePage {

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EquipmentAndRolePage');
  }

  imagePopup() {
    let image = this.modalCtrl.create(ImagePage, { 'url': '../assets/img/equipment_and_role.jpg' });
    image.present();
  }

}
