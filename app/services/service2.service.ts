import { Injectable } from '@angular/core';
import { Service1Service } from "./service1.service";
import { LogService } from "./log.service";

@Injectable()  //可不可以注入其它服务
export class Service2Service implements Service1Service {  //继承Service1
  set(key,value){   //服务：组件之间共享的公共方法
    this.log.log('set');
      localStorage.setItem(key,value);
    }
    get(key){
      this.log.log('get方法调用了');
      return localStorage.getItem(key);
    }
  constructor(private log:LogService) { } //服务中注入服务
}
