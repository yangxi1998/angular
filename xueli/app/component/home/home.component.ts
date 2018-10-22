import { Component, OnInit } from '@angular/core';
import{HttpClient, HttpHeaders } from '@angular/common/http'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
 // timer=null;
  course;
  header=new HttpHeaders({});
  ngOnInit() {
    this.http.get('/api/courses').subscribe((data)=>{                                          //get('')返回 observable可观察对象 用subscribe订阅可观察的对象
      //this.course=data;
      console.log(data);
   });
   this.http.post('/api',{name:'yangxi',pwd:123},{headers:this.header}).subscribe((data)=>{                                          //get('')返回 observable可观察对象 用subscribe订阅可观察的对象
    //this.course=data;
      console.log(data);
   });
}
  /* this.timer= setInterval(function(){
      console.log('ll');
    },1000)
  }
  ngOnDestroy(){   //当跳转到其它组件，有一些操作需要终止时，（定时器或取消订阅），需要ngOnDestroy终止
    //console.log('ll');//当首页跳转到其它组件时，会调用ngOnDestroy
    clearInterval(this.timer);//当首页跳转到其它组件时，会关闭定时器
  }

*/
  }
