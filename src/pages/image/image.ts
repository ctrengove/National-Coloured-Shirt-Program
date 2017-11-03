import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage {
    url: string;
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.url = navParams.get('url');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
