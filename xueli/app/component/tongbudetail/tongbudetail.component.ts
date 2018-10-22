import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { filter, map } from 'rxjs/operators';/*必须在有请求的部件中引用*/
@Component({
  selector: 'app-tongbudetail',
  templateUrl: './tongbudetail.component.html',
  styleUrls: ['./tongbudetail.component.css']
})
export class TongbudetailComponent implements OnInit {

  constructor(private router:ActivatedRoute,private http:HttpClient) { }
   courseId:number;
   course;
   //courseh;
  // flag:boolean=true;   /*添加属性1*/
  // num:number=3;
  //change(event){
    //this.num=event.target.value; //event.target 目标元素 当前标签input
 // }
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('/api/courses2/'+this.courseId).subscribe((data)=>{
      this.course=data;
    })
    //this.courseh=this.http.get('/api/courses/'+this.courseId);
        //courseh返回的是可观察的对象
  
   // this.http.get('/api/courses/'+this.courseId).pipe(map/*将处理完的数据返回*/(data=>{    //pipe返回的函数 也是一个可观察的对象，（可以链式写pipe） 管道 能够对数据提前做一些处理
    //  data.name='haha';  //为course数组再加一项name属性
    //  return data;    //map迭代流中的值，将值进行转换
    //})).pipe(filter(data=>{  //map和filter可以分开单独用
    //  return data.id===3;   //过滤出id为3的数组  只有当id为3时，返回true，数据会向下流动。如果返回false，数据就不会向下流动
   // })).subscribe(data=>{
    //  console.log(data);
   //   this.course=data;
   // })
  }

}
