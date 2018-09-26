import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService { //实现数据共享
   data:Array<any>=[1,2,3];
   add(msg){
     this.data.push(msg);
   }
  constructor() { }
}
