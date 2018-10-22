import { Component, OnInit } from '@angular/core';
 import { Router } from '@angular/router'; //js
import { ActivatedRoute } from '@angular/router';
 import{HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,/*js*/private http:HttpClient) { }  //对象名称route
  //courseId:number;
  arr:string[]=['<<','1','2','3','4','5','6','7','8','9','10','11','12','...','>>'];
  courses;
  ngOnInit() {
      this.http.get('/api/courses2').subscribe(data=>{
        this.courses=data;
      })
    // this.courseId=this.route.snapshot.params['courseId'];   //拿到courseId的value值，如果引用同一个组件， ngOnInit只会执行一次，courseId只会赋值一次
     //this.route.params.subscribe((params)=>{    //跳转到同一组件，这句话只执行一次，但是类似定时器，每当参数发生变化时，里面的那句话就会执行一次
     // this.courseId=params['courseId'];  // 跳转到同一组件，只要params一变，后面的语句就会执行一遍
    // })
  }
// go(){
 // this.router.navigate(['tongbu',600],{queryParams:{id:1000}});  /*js*/
 //}

}
