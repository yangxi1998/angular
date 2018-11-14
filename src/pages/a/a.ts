import { Component } from '@angular/core';
/*import { IonicPage, NavController, NavParams } from 'ionic-angular';*/
import { ModalController } from 'ionic-angular';  /*模态窗口*/
/*import{HttpClient} from '@angular/common/http';*/
import { AddPage } from '../add/add';
/**
 * Generated class for the APage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

/*@IonicPage()  自己创建的页面，删掉此句，然后把该文件夹下的a.module.ts删掉  （非懒加载模式）*/
@Component({
  selector: 'page-a',
  templateUrl: 'a.html',
})

export class APage {
  items = [];
  constructor(/*public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,*/public modalCtrl: ModalController) {
  }
  ionViewDidLoad() {  /*在生命周期初始化时，调入模态窗口*/
    let profileModal = this.modalCtrl.create(AddPage, { userId: 8675309 });
    profileModal.present();
  }
}
  /*
    for (let i = 0; i < 30; i++) {
      this.items.push( this.items.length );
    }
  }

  doInfinite(infiniteScroll) {
    this.http.get('/api/courses').subscribe(data=>{  //在ionic.config.json先配置代理
     
      console.log(data);
      infiniteScroll.complete();
    });
    console.log('Begin async operation');
   
    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
      if(this.items.length>90){
         infiniteScroll.enable();}
    }, 500);
  
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }*/
  



