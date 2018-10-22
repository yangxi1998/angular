import { Injectable } from '@angular/core';

@Injectable({       //可在app.module用import { serviceName } from ‘./services/……'替代
  providedIn: 'root'
})
export class Service1Service {

  constructor() {}
    set(key,value){   //服务：组件之间共享的公共方法
      localStorage.setItem(key,value);
    }
    get(key){
      return localStorage.getItem(key);
    }
   
}
