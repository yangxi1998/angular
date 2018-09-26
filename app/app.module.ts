import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Component01Component } from './component/component01/component01.component';
import { ParentComponent } from './component/parent/parent.component';
import {Service1Service} from './services/service1.service';
import { Component02Component } from './component/component02/component02.component'
//import { Service2Service } from "./services/service2.service";
//import { ShareService } from "./services/share.service";
@NgModule({
  declarations: [
    AppComponent,
    Component01Component,
    ParentComponent,
    Component02Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    Service1Service,  
    //{provide:Service1Service,useClass:Service2Service}
    ] //想用什么类，是由提供器决定的
  ,bootstrap: [AppComponent]
})
export class AppModule { }
