import { Component } from '@angular/core';
import { /*IonicPage, */NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ZhucePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/*@IonicPage()*/
@Component({
  selector: 'page-zhuce',
  templateUrl: 'zhuce.html',
})
export class ZhucePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {  /*和angular里的ngOnInit功能一样*/
    console.log(this.navParams.data);
    /*console.log(this.navParams.get('id')); 第二种*/
  }
  

}
