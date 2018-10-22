import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Component01Component } from './component/component01/component01.component';
import { ParentComponent } from './component/parent/parent.component';
import {Service1Service} from './services/service1.service';
import { Component02Component } from './component/component02/component02.component'
import { RouterModule } from '@angular/router'  //路由配置 1

import { HomeComponent } from "./component/home/home.component";
import { TongbuComponent } from "./component/tongbu/tongbu.component";
import { CourseComponent } from "./component/course/course.component";
import { ShequComponent } from "./component/shequ/shequ.component";
import { HeaderComponent } from './component/header/header.component';
import { Service2Service } from "./services/service2.service";
import{HttpClientModule} from "@angular/common/http"; 
 
import { TongbudetailComponent } from './component/tongbudetail/tongbudetail.component'   //http1
import { TaskComponent } from './component/task/task.component';
import { TongbukeComponent } from './component/tongbuke/tongbuke.component';
import { Course1Component } from './component/course1/course1.component';
import { SpeakComponent } from './component/speak/speak.component';
import { TongzhiComponent } from './component/tongzhi/tongzhi.component';
import { CoursedetailComponent } from './component/coursedetail/coursedetail.component';
import { Task1Component } from './component/task1/task1.component';
import { Task2Component } from './component/task2/task2.component';
import { Task3Component } from './component/task3/task3.component';
//import { ShareService } from "./services/share.service";
@NgModule({
  declarations: [
    AppComponent,
    Component01Component,
    ParentComponent,
    Component02Component,
   HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent,
    HeaderComponent,
    TongbudetailComponent,
    TaskComponent,
    TongbukeComponent,
    Course1Component,
    SpeakComponent,
    TongzhiComponent,
    CoursedetailComponent,
    Task1Component,
    Task2Component,
    Task3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
   RouterModule.forRoot([  //路由配置2
     {path:'parent',component:ParentComponent} ,//每一个对象都是路由配置，前面一个名字随便,后面的是组件的名称*/
   /* {path:'home',component:HomeComponent,children:[
       {path:'',}
     ]},*/
     {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbudetailComponent},
      {path:'course',component:CourseComponent},
      {path:'course/:courseId',component:CoursedetailComponent},
      {path:'shequ',component:ShequComponent},
      {path:'home',component:HomeComponent,children:[
        {path:'task',component:TaskComponent ,children:[
          {path:'task1',component: Task1Component},
          {path:'task2',component: Task2Component},
          {path:'task3',component: Task3Component}
        ]},
        {path:'tongbuke',component:TongbukeComponent},
        {path:'course1',component:Course1Component},
        {path:'speak',component:SpeakComponent},
        {path:'tongzhi',component:TongzhiComponent}
      ]}
     /* {path:'',redirectTo:'home',pathMatch:"full"},*/
    ]),
    HttpClientModule    //http2
  ],
  providers: [
    Service1Service,  
    {provide:Service1Service,useClass:Service2Service}
    ] //想用什么类，是由提供器决定的
  ,bootstrap: [AppComponent]
})
export class AppModule { }

