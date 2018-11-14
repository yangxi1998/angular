import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { APage } from '../pages/a/a';
import { BPage } from '../pages/b/b';
import { ZhucePage } from '../pages/zhuce/zhuce';
import { ComponentsModule } from '../components/components.module';
import{HttpClientModule} from '@angular/common/http';/*手动引入*/
import { MinePage } from '../pages/mine/mine';
import { AddPage } from '../pages/add/add';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    ZhucePage,
    MinePage,
    AddPage],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,/*引入组件模块*/
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
      platforms: {
        ios: {
          backButtonText:'', /*要通过导航栏中的后退按钮图标显示的文本。官网-配置*/
          tabsHideOnSubPages:'true' /*不会显示子页面的选项卡*/
        }
      }
    }, )
  ],
  bootstrap: [IonicApp],
  entryComponents: [                                /*上面的组件在entry中也要声明*/
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    APage,
    BPage,
    ZhucePage,
    MinePage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  
}
