import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';  /*模态窗口*/
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MinePage } from '../mine/mine';
import { AddPage } from '../add/add';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  /*tab5Root = APage;*/
  tab4Root = MinePage;  /*当创建新的页面时，可以用懒加载形式，原有的前四个页面不要用*/
 /* tab4Root = BPage;  tab5Root ='BPage';不用再根模块中进行配置，和在此页面中引入BPage，只需加引号，'BPage'如果报错重启serve，懒加载形式，目前不使用懒加载模式（创建页面时，根模块不会像angular一样进行页面配置，因为默认支持懒加载形式）*/
  constructor(public modalCtrl: ModalController) {}
   ionViewDidLoad(){
    if(document.querySelector('#tab-t0-2')){   //提高代码健壮性
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{    //加号页面是第二个 ，绑定点击事件，模态窗口
    let profileModal = this.modalCtrl.create(AddPage, { userId: 8675309 });
    profileModal.present();   
   });
  }
  }

}
