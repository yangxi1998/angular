import { Component,EventEmitter, OnInit,Input,Output} from '@angular/core';

@Component({
  selector: 'app-component01',
  templateUrl: './component01.component.html',
  styleUrls: ['./component01.component.css']
})
export class Component01Component implements OnInit {  //类中的变量用private或public声明，
  //如果类中没有实现 OnInit,OnChanges，会提示实现，不写也可以
  constructor() {}
   ngOnInit(){}
  @Output() event=new EventEmitter();
  @Output() txt1=new EventEmitter();
  txt:string;
  fun(e){
   if(e.keyCode==13){
    this.event.emit(this.txt);}
  }
  @Input() arr;






  
  /*
  @Output() txt1=new EventEmitter();
  gun(txt){
    this.txt1.emit(txt);
  }*/
/*
  fun(e){
    if(e.keyCode==13){
     this.arr.push('yx');
    }
  }*/
 






  /*
  @Input()arr;  
  @Input()arr1;   
  @Output() delIndex=new EventEmitter();  //事件发射器对象 
  constructor() { 
    this.log('constructor');
    console.log(this.arr)
  }
  log(msg){
    console.log(`这是第${this.index++}次调用,调用钩子函数是${msg}`)   //ES6特有的拼接符``不用+号
  }
  del(i){
        this.delIndex.emit(i);
  }
  index=0;
  ngOnChanges(changes:SimpleChanges):void{
  // this.log('ngOnChanges')
 // console.log(changes)
  for(let item in changes){
    console.log(changes[item].currentValue);
    for(let i in changes){
      console.log(`属性名是${i},属性值是${changes[item][i]}`)
    }
  }
  }
*/
  /*
  ngOnInit() {
    this.log('ngOnInit')
    console.log(this.arr)
  }
  ngDoCheck(){
    this.log('ngDoCheck')
  }
  */
}
