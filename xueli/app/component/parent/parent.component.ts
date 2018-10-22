import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../../services/service1.service';
//import { ShareService } from "../../services/share.service";
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
//  providers:[Service1Service ]//在当前组件调用声明，在当前组件中找，找不到在app.moudle中找，construcor在此组件声明，最终调用此providers
//作用域当前组件以及子组件，父组件不能调用，一般放在根模块中
})
export class ParentComponent implements OnInit {

  constructor(/*private share:ShareService,*/private local:Service1Service) { }  //依赖注入（需要的依赖Service1Service）：只需在构造函数中声名，依赖已经注入，而且实例化了
/* add(){
   this.share.add(100);
 }*/
  ngOnInit() {
    if(this.local.get('list1')){
    this.data1=this.local.get('list1').split(',');}
    if(this.local.get('list2')){
    this.data2=this.local.get('list2').split(",");}
  }
  data1=[];
  data2=[];

  fun(txt){
    this.data1.push(txt);
    this.local.set('list1',this.data1);
    }
  
  fun1(i){
    this.data2.push(this.data1[i]);
    this.local.set('list2',this.data2);

    this.data1.splice(i,1);
    this.local.set('list1',this.data1);
  }
  fun2(i){
    this.data1.push(this.data2[i]);
    this.local.set('list1',this.data1);
    this.data2.splice(i,1);
   this.local.set('list2',this.data2);
  }
  del(i){
    this.data1.splice(i,1);
    this.local.set('list1',this.data1);
  }
  del1(i){
    this.data2.splice(i,1);
   this.local.set('list2',this.data2);
  }
  


  /*
  data;  //data存储的是引用的地址，输入属性没有变，不触发ngOnChange，可以用ngDoCheck检测
 // data1=['a','b','c','d','e'];
  del(i){
    console.log(i);
    this.data.splice(i,1);
    this.local.set('list',this.data);

  }
  ngOnInit() {
    if(this.local.get('list')){
    this.data=this.local.get('list').split("");} //避免先执行init，没有值
    else{
      this.data=[1,2,3,4,5,6,7]; //先执行init函数，把data赋值1-7
    }
    //setTimeout(()=>{
      //this.local.set('name','yang');
     // this.data=this.data1;
   // },3000)
  }
 // setInterval(()=>{this.data.push(2)},1000)  //不触发ngOnChange
*/
}
