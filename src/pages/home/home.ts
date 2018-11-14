import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
/*import { BPage } from '../b/b';
import { ZhucePage } from '../zhuce/zhuce';*/


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  arr=['推荐','家居','餐厨','床上用品'];
 /* @ViewChild('ac') ac ;   拿到组件
  icons:string='camera';*/
  constructor(public navCtrl: NavController/*导航*/) {

  }
  /*
  goSub(){
    this.navCtrl.push(BPage,{id:1}); 或'BPage'懒加载形式，就不需引入BPage 目前不使用懒加载模式
  }
  go(){
    this.navCtrl.push(ZhucePage,{id:1});
  }
  ionViewDidLoad(){
    this.ac.get();
  }**/
}
