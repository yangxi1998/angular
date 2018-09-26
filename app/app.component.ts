import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {  //export class AppComponent implements Onint  继承接口
}
  /*
   title:string='angular hello';
   txt:string;
   arr:string[]=[];
   fun(e){
        if (e.keyCode==13){
          this.arr.unshift(this.txt);
          this.txt='';       
         }
   }
  
   del(idx){
     this.arr.splice(idx,1);
   }
   del1(idx1){
     this.arr1.splice(idx1,1);
   }
   arr1:string[]=[]; //变量声明必须赋值，否则是undefined
   fun1(idx){
     this.arr1.push(this.arr[idx]);//不能用this.txt
     this.arr.splice(idx,1);
   }
   fun2(idx1){
     this.arr.push(this.arr1[idx1]);
     this.arr1.splice(idx1,1);
   }
*/
/*
  txt:string;
  arr:Object[]=[];
  counter:number=0; //必须赋初值，否则变量值为undefined
     fun(e){
        if (e.keyCode==13){
          this.arr.unshift({title:this.txt,done:false}); //对象里面自定义了两个属性title和done
          this.txt='';   
  
         }
   }
   count(){           //value元素本身
     this.counter=0;
      this.arr.forEach((value,index)=>{
           if(value.done){
             this.counter++;
           }
      });
   }
   del(idx){
     this.arr.splice(idx,1);
     
   }
   fun1(idx){
     this.arr[idx].done=!this.arr[idx].done;
     this.count();
   }
}
*/
/*
  txt:string;
  arr:Msg[]=[];
  counter:number=0;
     fun(e){
        if (e.keyCode==13){
          this.arr.unshift(new Msg(this.txt,false)); //对象里面自定义了两个属性title和done
          this.txt='';   
          this.count();    
         }
   }
   count(){           //value元素本身
     this.counter=0;
      this.arr.forEach((value,index)=>{
           if(value.done){
             this.counter++;
           }
      });
   }
   del(idx){
     this.arr.splice(idx,1);
     
   }
   fun1(idx){
     this.arr[idx].done=!this.arr[idx].done;
     this.count();
   }
}
   class Msg{
     constructor(public title:string,public done:boolean){}
   }
*/
